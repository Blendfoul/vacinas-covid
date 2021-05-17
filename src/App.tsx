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
import Footer from "./components/Footer";
import Info from "./components/Info";
import Stats from "./components/Stats";

const App: React.FC<any> = () => {
  return (
    <Router>
      <MenuBar/>

      <div style={{flex: 1}}>
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
            <Stats />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
      </div>

      <Footer/>
    </Router>
  )
};

export default App;
