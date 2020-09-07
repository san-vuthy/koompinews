import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Newspage from './components/NewsPage/Newspage';
import NewsAticle from './components/NewsPage/NewsAticle';
import HomeJobs from './components/Jobs/HomeJobs';
import JobDetail from './components/Jobs/JobDetail';
import CompaniesHome from './components/Companies/CompaniesHome';
import CompaniesAtical from './components/Companies/CompaniesAtical';
import EventHome from './components/Event/EventHome';
import Knowledge from './components/Knowledge/Knowledge';
import About from './components/About';
import Sport from './components/NewsPage/Sport/Sport';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/news" exact={true} component={Newspage} />
          <Route path="/news/:id" exact={true} component={NewsAticle} />
          <Route path="/jobs/:id" component={JobDetail} />
          <Route path="/companies/:id" component={CompaniesAtical} />
          <Route path="/jobs" exact={true} component={HomeJobs} />
          <Route path="/companies" exact={true} component={CompaniesHome} />
          <Route path="/event" exact={true} component={EventHome} />
          <Route path="/knowledge" exact={true} component={Knowledge} />
          <Route path="/about" exact={true} component={About} />
          <Route path="/sport" exact={true} component={Sport} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
