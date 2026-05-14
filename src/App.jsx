import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import './App.css'; // CSS faylni ulashni unutmang!
import ContactMen from './Contact.jsx'
import QuoteApp from './QuoteApp';
import Men from './men';
import Appi from './api.jsx';
import CurrencyConventor from './Convertor.jsx';

import MovieSearch from './kino.jsx';

function App() {
  const Home = () => <h2 className="page-title">Men haqimda</h2>;
  const AboutComp = () => <h2 className="page-title">📖 Biz haqimizda</h2>;
  // const Contact = () => <h2 className="page-title">📞 Aloqa bo'limi</h2>;

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="nav-link">Bosh sahifa</Link>
        <Link to="/about" className="nav-link">Men haqimda </Link>
        <Link to="/contact" className="nav-link">Aloqa</Link>
        <Link to="/hikmatlar" className="nav-link">Quote</Link>
        <Link to="/api" className="nav-link">api</Link>
        <Link to="/Convertor" className="nav-link">Pul</Link>
        <Link to="/kino" className="nav-link">Kino</Link>
      </nav>


      <div className="content-area">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Men />} />
          <Route path="/contact" element={<ContactMen />} />
          <Route path="/hikmatlar" element={<QuoteApp />} />
          <Route path="/api" element={<Appi />} />
          <Route path="/Convertor" element={<CurrencyConventor />} />
               <Route path="/kino" element={<MovieSearch />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;