import React from 'react';
import {Switch, Route} from "react-router-dom";

import CheesesView from "./views/CheesesView";
import CategoriesView from "./views/CategoriesView";
//import HomeView from "./views/HomeView";
import MenusView from "./views/MenusView";
import MenuView from "./views/MenuView";

const Routes = () => (
    <Switch>
        {/* <Route exact path="/" component={HomeView}/> */}
        <Route exact path="/cheeses" component={CheesesView}/>
        <Route exact path="/categories" component={CategoriesView}/>
        <Route exact path="/menus" component={MenusView}/>
        <Route exact path="/menu/menuID" component={MenuView}/>
    </Switch>
);

// const menuNumber = props => {
    // const { menuID } = props.match.params;

export default Routes;