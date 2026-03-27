import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProvincePage from './pages/ProvincePage';
import LguPage from './pages/LguPage';
import TransactionPage from './pages/TransactionPage';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/province/:slug" element={<ProvincePage />} />
        <Route path="/lgu/:provinceSlug/:lguSlug" element={<LguPage />} />
        <Route path="/lgu/:provinceSlug/:lguSlug/transaction/:transactionSlug" element={<TransactionPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
