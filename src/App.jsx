import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Listings from './components/Listings.jsx';
import OurServices from './components/OurServices.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Listings />
      <OurServices />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
