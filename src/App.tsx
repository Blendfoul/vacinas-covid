import React, {useState} from 'react';
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
import InfoComponent from "./components/InfoComponent";
import Stats from "./components/Stats";
import ScheduleComponent from "./components/ScheduleComponent";
import CovidContext from "./store/CovidContext";

const App: React.FC<any> = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <CovidContext.Provider value={{enabled, setEnabled}}>
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
            <Route path={'/marcar'}>
              <ScheduleComponent />
            </Route>
            <Route path="/info">
              <InfoComponent />
            </Route>
          </Switch>
        </div>

        <Footer/>
      </Router>
    </CovidContext.Provider>
  )
};

export default App;
