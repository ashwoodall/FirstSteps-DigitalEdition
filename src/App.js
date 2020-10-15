import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';

import Homepage from './components/pages/homePage';
import Event from './components/pages/eventPage';
import CompetitionHome from './components/pages/competitionHomePage';
import Program from './components/pages/programPage';
import Funding from './components/pages/fundingPage';
import Contact from './components/pages/contactPage';

import CompetitionChildPage from './components/pages/competitionChildPage';

import Brandprotection from './components/footerPages/brandProtectionPage';
import Contactus from './components/footerPages/contactUsPage';
import Privacy from './components/footerPages/privacyPage';
import Termsanduse from './components/footerPages/termsAndUsePage';

// Includes
import './assets/scss/styles.scss';
import './assets/css/default.min.css';


function App() {
  return (
    <Router>
    <div className="App">
      
      <Header />

        <Route exact path='/Homepage' component={Homepage} />
       
      <Homepage />

      <Event />

      <CompetitionHome />

        <Route exact path='/CompetitionChildPage' component={CompetitionChildPage} />

      <Program />

      <Funding />

      <Contact />

      <Footer />

        <Route exact path='/Privacy' component={Privacy} />
        <Route exact path='/Brandprotection' component={Brandprotection} />
        <Route exact path='/Termsanduse' component={Termsanduse} />
        <Route exact path='/Contactus' component={Contactus} />

    </div>
    </Router>
  )
}

export default App;
