import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import Register from './components/Register';
import { SkipperProvider } from './context/skipper-context';
import { useEffect } from 'react';
import config from './config/config';

function App() {
  return (
    <div className="App">
      <SkipperProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </SkipperProvider>
    </div>
  );
}

export default App;
