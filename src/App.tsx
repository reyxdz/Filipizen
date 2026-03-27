import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProvincePage from './pages/ProvincePage';
import LguPage from './pages/LguPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/province/:slug" element={<ProvincePage />} />
        <Route path="/lgu/:provinceSlug/:lguSlug" element={<LguPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
