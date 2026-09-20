import React from 'react';
import { Banner } from './components/Banner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { Developers } from './components/Developers';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Banner />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <FAQ />
        <Developers />
      </main>
      <Footer />
    </div>
  );
}

export default App;
