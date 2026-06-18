import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Downloads from "./pages/Downloads";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Support from "./pages/Support";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-ink-950">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/support" element={<Support />} />
          <Route path="/account" element={<Account />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
