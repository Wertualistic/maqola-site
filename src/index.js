import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Desktop3 from './Desktop-3/Desktop3';
import Authenticated from './Authenticated/Authenticated';
import Home from './Authenticated/Home';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  </>
);
