import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        {/* <HomePage></HomePage> */}
        <Routes>
          <Route path="/" element={<HomePage/>} /> 
          {/* <Route path="/article" element={<ArticlePage/>} /> */}
          <Route path="/article" element={<ArticlePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
