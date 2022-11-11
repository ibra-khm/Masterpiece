import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './Pages/About';
import Checkout from './Pages/Checkout';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Item from './Pages/Item';
import Notfound from './Pages/Notfound';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Shop from './Pages/Shop';



function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Item" element={<Item />} />
      <Route path="*" element={<Notfound/>} />

    </Routes>
    <Footer />

    </>
  );
}

export default App;
