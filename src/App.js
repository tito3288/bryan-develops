import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import ThreeDGame from "./pages/ThreeDGame";
import AboutMe from "./pages/AboutMe";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";
import TemplatesPage from "./pages/TemplatesPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="ThreeDGame" element={<ThreeDGame />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="Terms" element={<Terms />} />
        <Route path="TemplatesPage" element={<TemplatesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
