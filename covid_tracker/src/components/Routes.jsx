import React from 'react';
import { Route, Switch } from 'react-router';
import { About } from './About/About';
import { CovidDetails } from './CovidDetails';
import { CovidInformation } from './information/Information';
import { Navbar } from './Navbar'
import { ResourcesPage } from './Resources/Resources';
import { CoronaStateWise } from './statewise/CoronaStateWise';


function Routes() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <CovidDetails />
                </Route>
                <Route path="/state-wise-cases" exact>
                    <CoronaStateWise />
                </Route>
                <Route path="/information" exact>
                    <CovidInformation />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/resources" exact>
                    <ResourcesPage />
                </Route>
                <Route>
                    <h3>404 | Not Found</h3>
                </Route>
            </Switch>
        </>
    );
}
export { Routes }