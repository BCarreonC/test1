// src/SecondComponent.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function SecondComponent() {
  return (
    <div>
      <h2>Segundo Componente</h2>
      <Link to="/third">
        <Button variant="contained">Ir al Tercer Componente</Button>
      </Link>
    </div>
  );
}

export default SecondComponent;