import React, { Fragment } from "react";
import {BrowserRouter as Router} from "react-router-dom";

import Routes from "./Routes";
import CheeseNav from './components/CheeseNav';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Fragment>
      <CheeseNav></CheeseNav>
      <Routes>

      </Routes>
      <Footer></Footer>
    </Fragment>
  </Router>
);

export default App;
