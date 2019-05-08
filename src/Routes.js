import React from 'react';
import {Switch, Route} from "react-router-dom";

import CheesesView from "./views/CheesesView";
import CategoriesView from "./views/CategoriesView";
import HomeView from "./views/HomeView";
import MenusView from "./views/MenusView";

const Routes = () => (
    <Switch>
        <Route exact path="/home" component={HomeView}/>
        <Route exact path="/cheeses" component={CheesesView}/>
        <Route exact path="/categories" component={CategoriesView}/>
        <Route exact path="/menus" component={MenusView}/>
    </Switch>
);

export default Routes;