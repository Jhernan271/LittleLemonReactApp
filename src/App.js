import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import BookingForm from './components/BookingForm';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
    <Router>
      <>
    <div className="App">
      <Header />
      <Nav />
    </div>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/booking-form" element={<BookingForm />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
    <div className="Footer">
      <Footer />
    </div>
      </>
    </Router>
  );
}

export default App;


