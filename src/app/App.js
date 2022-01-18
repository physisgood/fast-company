import React from "react";
import Navbar from "./components/ui/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
// import EditPage from "./components/page/editPage/editPage";

function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path={"/users/:userId?"} component={Users}/>
                <Route path={"/login/:type?"} component={Login}/>
                <Route path={"/"} exact component={Main}/>
                <Redirect to={"/"}/>
            </Switch>
        </div>
    );
}

export default App;
