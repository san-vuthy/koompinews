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
import JobByCate from './components/Jobs/JobByCate';
import EventAticle from './components/Event/EvenAticle';
import { BackTop } from 'antd';
import { UpCircleTwoTone } from '@ant-design/icons';

function App() {
  const style = {
    height: 90,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    // backgroundColor: '#1088e9',
    // backgroundColor: '#1890ff !important',
    color: '#fff',
    textAlign: 'center',
    fontSize: 40,
  };
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
          <Route path="/jobcategory/:id" exact={true} component={JobByCate} />
          <Route path="/event/:id" exact={true} component={EventAticle} />
        </Switch>
      </Router>
      <BackTop>
        {/* <div style={style}>UP</div> */}
        <UpCircleTwoTone style={style} />
      </BackTop>
    </React.Fragment>
  );
}

export default App;
