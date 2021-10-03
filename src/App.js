import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const serviceContext = createContext();

function App() {

  const [services, setServices] = useState([]);

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
          </Switch>
        </Router>
      </div>
    </serviceContext.Provider>

  );
}

export default App;
