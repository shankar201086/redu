import React from 'react';
import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './ProductDetail';

const App = () => {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Switch>
    <Route path ='/' exact component={ProductListing} />
    <Route path ='/Component' exact component={ProductComponent} />
    <Route path ='/Detail' exact component={ProductDetail} />
    <Route>404  Not Found </Route>
    </Switch>
    </Router>
   
    </div>
  )
}

export default App;
