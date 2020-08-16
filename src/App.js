import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import RestoList from './RestoList';
import CreateResto from './CreateResto';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import Footer from './Footer';
import EditResto from './EditResto';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={RestoList}/>
        <Route exact path='/createResto' component={CreateResto}/>
        <Route exact path='/editResto/:restoId/' component={EditResto}/>
        <Redirect to='/'/>
      </Switch><br/><br/>
      <Footer/>
    </>
  );
}

export default App;
