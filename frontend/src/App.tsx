import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import Register from './components/Register';
import { SkipperProvider } from './context/skipper-context';
import { useEffect } from 'react';
import config from './config/config';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
