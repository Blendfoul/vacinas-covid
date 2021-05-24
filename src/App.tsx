import React, {useState} from 'react';
import MenuBar from "./components/menu/MenuBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/news/Home";
import Vaccines from "./components/vaccines/Vaccines";
import VaccineExtended from "./components/vaccines/VaccineExtended";
import Footer from "./components/utils/Footer";
import InfoComponent from "./components/info/InfoComponent";
import Stats from "./components/stats/Stats";
import ScheduleComponent from "./components/schedule/ScheduleComponent";
import CovidContext from "./store/CovidContext";
import ContactsComponent from "./components/contacts/ContactsComponent";
import ErrorPage from "./components/utils/ErrorPage";

const App: React.FC<any> = () => {
  const [enabled, setEnabled] = useState(true);
  const [region, setRegion] = useState('');

  const valueStore = {enabled, setEnabled, region, setRegion};

  return (
    <CovidContext.Provider value={valueStore}>
      <Router>
        <MenuBar/>
        <div style={{flex: 1, height: '100%'}}>
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
            <Route path="/contactos">
              <ContactsComponent />
            </Route>
            <Route path="*">
              <ErrorPage error={{message: ''}} type={'not-found'}/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </CovidContext.Provider>
  )
};

export default App;
