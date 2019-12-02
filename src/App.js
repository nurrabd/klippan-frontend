import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Footer from "./components/Footer";

import {BrowserRouter, Router, Route} from "react-router-dom";
import NewAdds from "./components/NewAdds";
import Dashboard from "./components/Dashboard";


function App() {
  return (

      <Provider store={store}>
          <BrowserRouter>


        <Header/>

        <Route exact path="/Registration" component={Registration}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/NewAdds" component={NewAdds}/>
        <Route exact path="/" component={Dashboard} />

   <Footer/>


          </BrowserRouter>

      </Provider>


  );
}

export default App;
