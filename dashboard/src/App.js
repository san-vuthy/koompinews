import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AllPage from './Components/Page/AllPage';
// import AllNews from './Components/Page/Homepage/AllNews';
// import AddNews from './Components/Page/Homepage/AddHome';
// import AllPopularNews from './Components/Page/PopularNews.js/AllPopularNews';
// import AddPopularNews from './Components/Page/PopularNews.js/AddPopularNews';
import AddNewspage from './Components/Page/Newspage/AddNewspage';
import AllNewspage from './Components/Page/Newspage/AllNewspage';
import Alljobs from './Components/Page/Jobs/Alljobs';
import AddJob from './Components/Page/Jobs/AddJob';
import JobCategories from './Components/Page/Jobs/JobCategories';
import Test from './Components/Test';
import EditNews from './Components/Page/Newspage/EditNews';
import EditJob from './Components/Page/Jobs/EditJob';
import Show from './Components/Page/Jobs/JobCategory/Show';
import AddCompany from './Components/Page/Company/AddCompany';
import AllCompany from './Components/Page/Company/AllCompany';
import EditCompany from './Components/Page/Company/EditCompany';
import AddEvent from './Components/Page/Event/AddEvent';
import EditEvent from './Components/Page/Event/EditEvent';
import AllEvent from './Components/Page/Event/AllEvent';
import AllAbout from './Components/Page/About/AllAbout';
import AddAbout from './Components/Page/About/AddAbout';
import EditAbout from './Components/Page/About/EditAbout';
import AllKnowledge from './Components/Page/Knowledge/AllKnowledge';
import AddKnowledge from './Components/Page/Knowledge/AddKnowledge';
import EditKnowledge from './Components/Page/Knowledge/EditKnowledge';
import Login from './Components/Layout/Login';
import AllCv from './Components/Page/CV/AllCv';
import PreviewCv from './Components/Page/CV/PreviewCv';
import AllBanner from './Components/Page/Banner/AllBanner';
import AddBanner from './Components/Page/Banner/AddBanner';
import EditBanner from './Components/Page/Banner/EditBanner';
import AllHome from './Components/Page/Homepage/AllHome';
import AddHome from './Components/Page/Homepage/AddHome';
import EditHome from './Components/Page/Homepage/EditHome';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          {/* <Route exact path="/allpage" component={AllPage} /> */}
          {/* <Route exact path="/admin/newpage" component={AllNews} />
          <Route exact path="/admin/addnews" component={AddNews} />
          <Route
            exact
            path="/admin/allpopularnews"
            component={AllPopularNews}
          />
          <Route
            exact
            path="/admin/addpopularnews"
            component={AddPopularNews}
          /> */}

          {/* //ok */}
          <Route exact path="/admin/addnewspage" component={AddNewspage} />
          <Route exact path="/admin/allnews" component={AllNewspage} />
          <Route exact path="/admin/alljobs" component={Alljobs} />
          <Route exact path="/admin/addjobs" component={AddJob} />
          <Route exact path="/admin/jobcategories" component={JobCategories} />
          <Route exact path="/admin/editnews/:id" component={EditNews} />
          <Route exact path="/admin/editjob/:id" component={EditJob} />
          <Route exact path="/admin/show" component={Show} />
          <Route exact path="/admin/addcompany" component={AddCompany} />
          <Route exact path="/admin/allcompanies" component={AllCompany} />
          <Route exact path="/admin/editcompany/:id" component={EditCompany} />
          <Route exact path="/admin/addevent/" component={AddEvent} />
          <Route exact path="/admin/editevent/:id" component={EditEvent} />
          <Route exact path="/admin/allevent/" component={AllEvent} />
          <Route exact path="/admin/allabout/" component={AllAbout} />
          <Route exact path="/admin/addabout/" component={AddAbout} />
          <Route exact path="/admin/editabout/:id" component={EditAbout} />
          <Route exact path="/admin/allknowledge/" component={AllKnowledge} />
          <Route exact path="/admin/addknowledge/" component={AddKnowledge} />
          <Route
            exact
            path="/admin/editknowledge/:id"
            component={EditKnowledge}
          />
          <Route exact path="/admin/allcv/" component={AllCv} />
          <Route exact path="/admin/acv/:id" component={PreviewCv} />
          <Route exact path="/admin/allbanner" component={AllBanner} />
          <Route exact path="/admin/addbanner" component={AddBanner} />
          <Route exact path="/admin/editbanner/:id" component={EditBanner} />
          <Route exact path="/admin/allhome" component={AllHome} />
          <Route exact path="/admin/addhome" component={AddHome} />
          <Route exact path="/admin/edithome/:id" component={EditHome} />
          <Route exact path="/login" component={Login} />

          {/* Test */}
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
