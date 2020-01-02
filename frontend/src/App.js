import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Items from './components/pages/Items';

import ListState from './context/list/ListState';
import ItemState from './context/item/ItemState';
import './App.css';
import Navbar from './components/Navbar';
//import Item from './components/lists/Item';

function App() {
  return (
    <ListState>
      <ItemState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/items' component={Items} />
                <Route exact path='/about' component={About} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ItemState>
    </ListState>
  );
}

export default App;
