import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./screens/Home";
import About from "./screens/About";
import Blogs from "./screens/Blogs";
import Contact from "./screens/Contact";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const [apidata, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((apidata) => {
        setApiData(apidata);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);


  return (
    <>
      <Navbar />

      <Routes>
      <Route path="/" element={<Home  apidata={apidata} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blogs" element={<Blogs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;


