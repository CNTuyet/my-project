import React, { useEffect } from "react";
import Header from "./components/Header";
import Bestcoin from "./components/Bestcoin";
import Footer from "./components/Footer";
import backgroundBody from './assets/img/backgroundBody.webp';

function App() {
  useEffect(() => {
    // Thay đổi tiêu đề trang
    document.title = 'Coinsniper';
  }, []);
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundBody})` }}>
      <Header />
      <Bestcoin />
      <Footer />
    </div>
  );
}

export default App;
