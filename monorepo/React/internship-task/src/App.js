import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServicesList from "./components/ServicesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicePage from "./components/ServicePage";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    document.title = "Internship Task Liria";
  }, []);

  const updatePage = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      <Header page={currentPage} />
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ServicesList updatePage={updatePage} />} />
            <Route path="/service/:serviceName" element={<ServicePage updatePage={updatePage}/>} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
