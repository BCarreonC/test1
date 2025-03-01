// src/ThirdComponent.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function ThirdComponent() {
  return (
    <div>
      <h2>Tercer Componente</h2>
      <Link to="/fourth">
        <Button variant="contained">Ir al Cuarto Componente</Button>
      </Link>
    </div>
  );
}

export default ThirdComponent;