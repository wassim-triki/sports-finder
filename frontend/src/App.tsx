import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import Register from './components/Register';
import { SkipperProvider } from './context/skipper-context';
import { useEffect } from 'react';
import config from './config/config';
import { Provider } from 'react-redux';
import { useAppSelector } from './redux/store';
import LoginForm from './components/LoginForm';
import { selectCurrentUser } from './redux/features/authSlice';

function App() {
  const { auth } = useAppSelector((state) => state);

  useEffect(() => {
    console.log(auth);
  }, [auth]);
  return (
    <div className="App">
      <SkipperProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </SkipperProvider>
    </div>
  );
}

export default App;
