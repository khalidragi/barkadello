import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import FranchiseForm from './components/pages/Franchise';

import './App.css';
import Menus from './components/pages/Menu';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <main style={{ marginTop: '75px' }}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/menus' component={Menus} />
            <Route path='/franchise' component={FranchiseForm} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
