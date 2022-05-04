
import './App.scss';
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../src/Hoc/Home';
import Header from '../src/Hoc/Header';
import Footer from '../src/Hoc/Footer';
import CartPage from './Hoc/CartPage';
import NotFoundpage from './Hoc/NotFoundpage';
import FormDetails from './Hoc/FormDetails';
import Checkout from './Hoc/Checkout';
import About from './Hoc/About';
import Contact from './Hoc/Contact';


function App(){

  return(
        <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/about'} component={About} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/cartpage'} component={CartPage} />
            <Route exact path={'/formdetails'} component={FormDetails} />
            <Route exact path={'/checkout'} component={Checkout} />
            <Route component={NotFoundpage} />
            
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
  )
}

export default App;
