import './App.css';
import React, {useEffect} from 'react'
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './contextAPI/StateProvider';

function App() {
  const [{basket},dispatch]= useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log("USER is >>>>", authUser);
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  

  return (
    <Router>
    <div className="App">
      
      
      <Routes>
      <Route path = "/" element={[ <Header/>,<Home />]} />
      <Route path="/checkout" element={[ <Header/>,<Checkout/>]} />
      <Route path = "/login" element={<Login />} />
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
