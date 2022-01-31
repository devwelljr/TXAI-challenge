import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'

import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Register from './pages/Register';
import UserProducts from './pages/UserProducts';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <UserProducts /> } />
      <Route exact path="/customer/perfil" element={ <Perfil /> } />
    </Routes>
  );
}

export default App;
