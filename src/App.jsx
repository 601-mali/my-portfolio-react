import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  let Page = Home;
  if (path === "/about" || path.endsWith("/about.html")) Page = About;
  if (path === "/services" || path.endsWith("/services.html")) Page = Services;
  return <><Navbar /><Page /><Footer /></>;
}
