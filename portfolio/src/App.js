import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavbarTop from './components/NavbarTop';
import Portfolio from './pages/Portfolio';

function App() {

  document.body.style = 'background: #121212;';

  return (
    <div className="App">
      <BrowserRouter>
      <NavbarTop />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/portfolio" elemen={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
