import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServicesList from "./components/ServicesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicePage from "./components/ServicePage";

function App() {
  useEffect(() => {
    document.title = "Internship Task Liria";
  }, []);

  return (
    <div className="App">
      <Header page={1} />
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ServicesList />} />
            <Route path="/service/:serviceName" element={<ServicePage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
