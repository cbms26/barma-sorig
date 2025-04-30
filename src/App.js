import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Service />
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
