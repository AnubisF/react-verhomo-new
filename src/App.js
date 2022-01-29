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
                <meta name="description" content="Ompelimo & Verhomo Katariina Oulu" />
                <meta name="description" content="Katariina Oulu" />
                <meta name="description" content="Katariina" />
                <meta name="description" content="Ompelimo" />
                <meta name="description" content="Verhomo" />
                <meta name="description" content="verhoomo oulu" />
                <meta name="description" content="verhoomo oulu joutsensilta" />
                <meta name="description" content="verhoilu oulu" />
                <meta name="description" content="verhoiluliike oulu" />
                <meta name="description" content="huonekalujen verhoilu oulu" />
                <meta name="description" content="verhoilija oulu" />
                <meta name="description" content="autoverhoomo oulu" />
                <meta name="description" content="huonekalujen entisöinti oulu" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
        </div>
    );
}

export default App;
