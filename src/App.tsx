import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./components/header/header";
import About from "./components/about/about";
import Home from "./components/home/home";
import Advertisement from "./components/advertisement/Advertisement";
import Footer from "./components/footer/Footer";
import PriceEstimator from "./components/feature/PriceEstimator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePageWithScroll />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/advertisement" element={<Advertisement />}></Route>
        <Route path="/price-estimator" element={<PriceEstimator />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function HomePageWithScroll() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>

      <section id="advertisement">
        <Advertisement />
      </section>

      <section id="about">
        <About />
      </section>
    </div>
  );
}
