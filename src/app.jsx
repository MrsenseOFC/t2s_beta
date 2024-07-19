// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext/AuthContext';
import { Login } from './pages/Login/Login';
import { PlayerDashboard } from './pages/PlayerDashboard/PlayerDashboard';
import { PrivateRoute } from './routes/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/player-dashboard" element={<PlayerDashboard />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
