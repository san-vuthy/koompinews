import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllPage from './Components/Page/AllPage';
import AllNews from './Components/Page/Homepage/AllNews';
import AddNews from './Components/Page/Homepage/AddNews';
import AllPopularNews from './Components/Page/PopularNews.js/AllPopularNews';
import AddPopularNews from './Components/Page/PopularNews.js/AddPopularNews';
import AddNewspage from './Components/Page/Newspage/AddNewspage';
import AllNewspage from './Components/Page/Newspage/AllNewspage';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          {/* <Route exact path="/allpage" component={AllPage} /> */}
          <Route exact path="/admin/newpage" component={AllNews} />
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
          />
          <Route exact path="/admin/addnewspage" component={AddNewspage} />
          <Route exact path="/admin/allnews" component={AllNewspage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
