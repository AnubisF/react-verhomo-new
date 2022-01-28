import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Helmet} from "react-helmet";

// Home pages
import KatariinaVerhoomo from "./pages/home/KatariinaVerhoomo";

// Pages
import Page404 from "./pages/others/Page404";

// Elements
import ScrollToTop from "./helpers/ScrollToTop";

function App() {

    return (
        <div className="App">
            <Router basename={"/"}>
                <ScrollToTop>
                    <Switch>
                        <Route
                            exact
                            path={`${process.env.PUBLIC_URL}/`}
                            component={KatariinaVerhoomo}
                        />
                        <Route component={Page404}/>
                    </Switch>
                </ScrollToTop>
            </Router>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ompelimo&Verhomo Katariina</title>
                <meta name="description" content="App Description" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
        </div>
    );
}

export default App;
