import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Intro from "./components/pages/Intro";
import Application from "./components/pages/Application";

const App = (history)=> {
  return (
   <>
      <BrowserRouter>
        {console.log("history",history)}
          <Route exact path="/" exact component={Intro}/>
          <Route exact path="/app" exact component={Application}/>
      </BrowserRouter>
   </>
  );
}

export default App;
