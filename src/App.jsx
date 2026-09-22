import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
