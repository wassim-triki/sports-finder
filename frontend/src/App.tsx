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
import NoAuth from './components/NoAuth';

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
            <Route
              path="/register"
              element={
                <NoAuth>
                  <Register />
                </NoAuth>
              }
            />
            <Route
              path="/login"
              element={
                <NoAuth>
                  <LoginForm />
                </NoAuth>
              }
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </SkipperProvider>
    </div>
  );
}

export default App;
