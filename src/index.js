import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import GameDetails from './components/GameDetails'
import GameList from './components/GameList';

const root = ReactDOM.createRoot(document.getElementById('root'));
const name = "GeekLand"
root.render(
  <React.StrictMode>
    <Router>
      <div>
      <Header name={name}/>
        <Routes>
        <Route path="/" element={<GameList />} />
        </Routes>
       
      </div>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
