import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import ServicePage from "./routes/ServicePage";
import PaymentPage from "./routes/PaymentPage";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:heading" element={<ServicePage />} />
        <Route path="/service/:heading/payment" element={<PaymentPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

