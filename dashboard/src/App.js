import React from "react";
import "antd/dist/antd.css";
import "./App.css";
// import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import AllPage from './Components/Page/AllPage';
// import AllNews from './Components/Page/Homepage/AllNews';
// import AddNews from './Components/Page/Homepage/AddHome';
// import AllPopularNews from './Components/Page/PopularNews.js/AllPopularNews';
// import AddPopularNews from './Components/Page/PopularNews.js/AddPopularNews';
import AddNewspage from "./Components/Page/Newspage/AddNewspage";
import AllNewspage from "./Components/Page/Newspage/AllNewspage";
import Alljobs from "./Components/Page/Jobs/Alljobs";
import AddJob from "./Components/Page/Jobs/AddJob";
import JobCategories from "./Components/Page/Jobs/JobCategories";
import Test from "./Components/Test";
import EditNews from "./Components/Page/Newspage/EditNews";
import EditJob from "./Components/Page/Jobs/EditJob";
import Show from "./Components/Page/Jobs/JobCategory/Show";
import AddCompany from "./Components/Page/Company/AddCompany";
import AllCompany from "./Components/Page/Company/AllCompany";
import EditCompany from "./Components/Page/Company/EditCompany";
import AddEvent from "./Components/Page/Event/AddEvent";
import EditEvent from "./Components/Page/Event/EditEvent";
import AllEvent from "./Components/Page/Event/AllEvent";
import AllAbout from "./Components/Page/About/AllAbout";
import AddAbout from "./Components/Page/About/AddAbout";
import EditAbout from "./Components/Page/About/EditAbout";
import AllKnowledge from "./Components/Page/Knowledge/AllKnowledge";
import AddKnowledge from "./Components/Page/Knowledge/AddKnowledge";
import EditKnowledge from "./Components/Page/Knowledge/EditKnowledge";
import Login from "./Components/Layout/Login";
import AllCv from "./Components/Page/CV/AllCv";
import PreviewCv from "./Components/Page/CV/PreviewCv";
import AllBanner from "./Components/Page/Banner/AllBanner";
import AddBanner from "./Components/Page/Banner/AddBanner";
import EditBanner from "./Components/Page/Banner/EditBanner";
import AllHome from "./Components/Page/Homepage/AllHome";
import AddHome from "./Components/Page/Homepage/AddHome";
import EditHome from "./Components/Page/Homepage/EditHome";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Logout from "./Components/Layout/Logout";

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
          <PrivateRoute
            exact
            path="/admin/addnewspage"
            component={AddNewspage}
          />
          <PrivateRoute exact path="/admin/allnews" component={AllNewspage} />
          <PrivateRoute exact path="/admin/alljobs" component={Alljobs} />
          <PrivateRoute exact path="/admin/addjobs" component={AddJob} />
          <PrivateRoute
            exact
            path="/admin/jobcategories"
            component={JobCategories}
          />
          <PrivateRoute exact path="/admin/editnews/:id" component={EditNews} />
          <PrivateRoute exact path="/admin/editjob/:id" component={EditJob} />
          <PrivateRoute exact path="/admin/show" component={Show} />
          <PrivateRoute exact path="/admin/addcompany" component={AddCompany} />
          <PrivateRoute
            exact
            path="/admin/allcompanies"
            component={AllCompany}
          />
          <PrivateRoute
            exact
            path="/admin/editcompany/:id"
            component={EditCompany}
          />
          <PrivateRoute exact path="/admin/addevent/" component={AddEvent} />
          <PrivateRoute
            exact
            path="/admin/editevent/:id"
            component={EditEvent}
          />
          <PrivateRoute exact path="/admin/allevent/" component={AllEvent} />
          <PrivateRoute exact path="/admin/allabout/" component={AllAbout} />
          <PrivateRoute exact path="/admin/addabout/" component={AddAbout} />
          <PrivateRoute
            exact
            path="/admin/editabout/:id"
            component={EditAbout}
          />
          <PrivateRoute
            exact
            path="/admin/allknowledge/"
            component={AllKnowledge}
          />
          <PrivateRoute
            exact
            path="/admin/addknowledge/"
            component={AddKnowledge}
          />
          <PrivateRoute
            exact
            path="/admin/editknowledge/:id"
            component={EditKnowledge}
          />
          <PrivateRoute exact path="/admin/allcv/" component={AllCv} />
          <PrivateRoute exact path="/admin/acv/:id" component={PreviewCv} />
          <PrivateRoute exact path="/admin/allbanner" component={AllBanner} />
          <PrivateRoute exact path="/admin/addbanner" component={AddBanner} />
          <PrivateRoute
            exact
            path="/admin/editbanner/:id"
            component={EditBanner}
          />
          <PrivateRoute exact path="/admin/allhome" component={AllHome} />
          <PrivateRoute exact path="/admin/addhome" component={AddHome} />
          <PrivateRoute exact path="/admin/edithome/:id" component={EditHome} />
          <PublicRoute exact path="/logout" component={Logout} />
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/" component={Login} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
