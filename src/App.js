import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import './App.css';
import Menus from './components/pages/Menu';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/menus' component={Menus} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
