import React, { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Header from "./components/Header";
import Home from "./components/Home";
import Welcome from "./components/Welcome"
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Giveaway from "./components/Giveaway";
import Artist from "./components/Artist";
import Team from "./components/Team";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <>
    {loading === false ? (
    <div className="App">
      <Header />
      <Home />
      <Welcome />
      <About />
      <Roadmap />
      <Giveaway />
      <Artist />
      <Team />
      <Faq />
      <Footer />
    </div>
      ) : (
        <LoadingScreen />
      )}
      </>
  );
}

export default App;