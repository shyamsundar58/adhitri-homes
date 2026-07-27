import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import WhyChoose from "./components/Sections/WhyChoose";
import Projects from "./components/Sections/Projects";
import Construction from "./components/Sections/Construction";
import Contact from "./components/Sections/Contact";

import Footer from "./components/Footer/Footer";
import FAQ from "./components/Sections/Faq";
import LoadingScreen from "./components/LoadingScreen";
import ScrollTop from "./components/Common/ScrollTop";
import CallFloat from "./components/Common/CallFloat";
import WhatsappFloat from "./components/Common/WhatsappFloat";
import Testimonials from "./components/Sections/Testimonials";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  //   useEffect(() => {
  //   const handleLoad = () => {
  //     setLoading(false);
  //   };

  //   if (document.readyState === "complete") {
  //     setLoading(false);
  //   } else {
  //     window.addEventListener("load", handleLoad);
  //   }

  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <WhyChoose />

        <Projects />

        <Construction />

        <Testimonials />

        <FAQ />

        <Contact />
      </main>

      <Footer />
      <ScrollTop />
      <CallFloat />
      <WhatsappFloat />
    </>
  );
}

export default App;