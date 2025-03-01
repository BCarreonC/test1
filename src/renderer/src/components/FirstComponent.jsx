// src/FirstComponent.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function FirstComponent() {
  return (
    <div>
      <h2>Primer Componente</h2>
      <Link to="/second">
        <Button variant="contained">Ir al Segundo Componente</Button>
      </Link>
    </div>
  );
}

export default FirstComponent;