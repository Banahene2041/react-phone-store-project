import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
// import logo from './logo.svg';
import './App.css';
// import Navbar
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar';
import Cart from "./Components/Cart"
import ProductList from "./Components/ProductList"
import Default from "./Components/Default"
import Details from "./Components/Details"
import Modal from './Components/Modal';

function App(){
  return (
   <React.Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/details" component={Details} />
      <Route path="/cart" component={Cart} />
      <Route component={Default}/>
    </Switch>
    <Modal />
   </React.Fragment>
  )
}

export default App;
