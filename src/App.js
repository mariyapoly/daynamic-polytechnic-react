import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import Footer from './components/Footer/Footer';
import AboutOus from './components/AboutOus/AboutOus';
import OurServices from './components/OurServices/OurServices';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import OurTeachers from './components/OurTeachers/OurTeachers';

export const serviceContext = createContext();

function App() {

  // declear state storage data
  const [services, setServices] = useState([]);

  //declear use effect for data load 
  useEffect(() => {
    fetch('./fakeCourses.JSON')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);

  return (
    <serviceContext.Provider value={services}>
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <AboutOus></AboutOus>
            </Route>
            <Route exact path="/course">
              <OurServices></OurServices>
            </Route>
            <Route exact path="/teacher">
              <OurTeachers></OurTeachers>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </serviceContext.Provider>

  );
}

export default App;
