import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import { Register } from './components/Register';

function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
