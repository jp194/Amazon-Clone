import React, { useEffect } from "react";
import './App.css';
import  {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function App() {

  const [{},dispatch]=useStateValue();

  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }else{
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })
    return ()=>{
      unsubscribe();
      //clean up code
    }
  }, []);
   /* the useEffect hook is called when the app component loads it is called once bcoz [] is provided if for eg 
   basket would have been provided it would be called every time basket state is changed */

  return (

   <Router>
      <div className="app">
         <Switch>
           <Route path="/checkout"><Header /> <Checkout/></Route>

           <Route path="/login"><Login/></Route>

           <Route path="/"><Header /><Home />
          
           </Route>
         </Switch>
      </div>
   </Router>
  );
}

export default App;
