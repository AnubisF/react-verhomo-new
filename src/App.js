import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Home pages
import KatariinaVerhoomo from "./pages/home/KatariinaVerhoomo";

// Pages
import Page404 from "./pages/others/Page404";

// Elements
import ScrollToTop from "./helpers/ScrollToTop";

function App() {

  return (
    <Router basename={"/"}>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={KatariinaVerhoomo}
          />
          <Route component={Page404} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
