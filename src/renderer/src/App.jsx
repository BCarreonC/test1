// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import FourthComponent from './components/FourthComponent';

function App() {
  return (
    <Router>
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<FirstComponent />} />
          <Route path="/second" element={<SecondComponent />} />
          <Route path="/third" element={<ThirdComponent />} />
          <Route path="/fourth" element={<FourthComponent />} />
        </Routes>
      </Box>
    </Router>
  );
}

function Home() {
  return (
    <Box>
      <h1>Inicio</h1>
      <Link to="/first">
        <Button variant="contained">Ir al Primer Componente</Button>
      </Link>
    </Box>
  );
}

export default App;