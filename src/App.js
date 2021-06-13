import React, { useState } from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from "./Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Router>
      <div>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Menu />}
      </div>
    </Router>
  );
}

export default App;
