import React from 'react';
import MenuBar from "./components/MenuBar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from "./components/Home";
import Vaccines from "./components/Vaccines";
import VaccineExtended from "./components/VaccineExtended";

const App: React.FC<any> = () => {
  return (
    <Router>
      <MenuBar/>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/vacinas" exact>
          <Vaccines />
        </Route>
        <Route path={`/vacinas/:name`}>
          <VaccineExtended />
        </Route>
        <Route path="/estatisticas">
        </Route>
      </Switch>
    </Router>
  )
};

export default App;
