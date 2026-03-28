import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import ProvincePage from './pages/ProvincePage';
import LguPage from './pages/LguPage';
import TransactionPage from './pages/TransactionPage';

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show loading screen when route changes
    setIsLoading(true);

    // Hide loading screen after images are loaded
    const handleLoadComplete = () => {
      setIsLoading(false);
    };

    // Wait for all images to load
    const images = document.querySelectorAll('img');
    let loadedCount = 0;
    let totalCount = images.length;

    if (totalCount === 0) {
      // No images on page
      handleLoadComplete();
    } else {
      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === totalCount) {
          handleLoadComplete();
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          checkAllLoaded();
        } else {
          img.addEventListener('load', checkAllLoaded);
          img.addEventListener('error', checkAllLoaded);
        }
      });
    }

    // Fallback: hide loading after 3 seconds max
    const timeout = setTimeout(handleLoadComplete, 3000);

    return () => {
      clearTimeout(timeout);
      images.forEach((img) => {
        img.removeEventListener('load', handleLoadComplete);
        img.removeEventListener('error', handleLoadComplete);
      });
    };
  }, [location.pathname]);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/province/:slug" element={<ProvincePage />} />
        <Route path="/lgu/:provinceSlug/:lguSlug" element={<LguPage />} />
        <Route path="/lgu/:provinceSlug/:lguSlug/transaction/:transactionSlug" element={<TransactionPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
