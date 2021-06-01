import React from 'react';
import { Route, Switch } from 'react-router';
import { Cart } from './FruitsandVegs/Cart';
import { DairyAndBakery } from './FruitsandVegs/DairyAndBakery';
import { DairyAndBakeryData } from './FruitsandVegs/DairyAndBakeryData';
import { DairyAndBakeryPage } from './FruitsandVegs/DairyAndBakeryPage';
import { DairyAndBakeryPageData } from './FruitsandVegs/DairyAndBakeryPageData';
import { FruitsAndVegsPageData } from './FruitsandVegs/FruitsAndVegPageData';

import { FruitsAndVegsData } from './FruitsandVegs/FruitsAndVegsData';

import { HomePage } from './FruitsandVegs/Home';
import { Login } from './FruitsandVegs/Login';

import { Snacks } from './FruitsandVegs/Snacks';
import { SnacksData } from './FruitsandVegs/SnacksData';
import { SnacksPage } from './FruitsandVegs/SnacksPage';
import { SnacksPageData } from './FruitsandVegs/SnacksPageData';
import { Staples } from './FruitsandVegs/Staples';
import { StaplesData } from './FruitsandVegs/StaplesData';
import { StaplesPage } from './FruitsandVegs/StaplesPage';
import { StaplesPageData } from './FruitsandVegs/StaplesPageData';
import { Navbar } from './Navbar';


function Routes() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/fruitsandvegs" exact>
                    <FruitsAndVegsData />
                </Route>
                <Route path="/fruitsandvegs/:id" exact>
                    <FruitsAndVegsPageData />
                </Route>
                <Route path="/dairyandbakery" exact>
                    <DairyAndBakeryData />
                </Route>
                <Route path="/dairyandbakery/:id" exact>
                    <DairyAndBakeryPageData />
                </Route>
                <Route path="/snacks" exact>
                    <SnacksData />
                </Route>
                <Route path="/snacks/:id" exact>
                    <SnacksPageData />
                </Route>
                <Route path="/staples" exact>
                    <StaplesData />
                </Route>
                <Route path="/staples/:id" exact>
                    <StaplesPageData />
                </Route>
                <Route path="/aboutus" exact>
                    <h1 style={{ marginTop: "150px" }}>About Us</h1>
                </Route>
                <Route path="/contactus" exact>
                    <h1 style={{ marginTop: "150px" }}>Contact Us</h1>
                </Route>
                <Route path="/cart" exact>
                    <Cart />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route>
                    <div>
                        <h3 style={{ marginTop: "365px" }}>404 | Page Not Found</h3>
                    </div>

                </Route>
            </Switch>
        </div>

    );
}
export { Routes }