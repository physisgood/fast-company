import React from "react";
import Navbar from "./components/ui/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./hooks/useProfession";
import { QualityProvider } from "./hooks/useQuality";
import AuthProvider from "./hooks/useAuth";

function App() {
    return (
        <div>
            <AuthProvider>
                <Navbar/>
                <QualityProvider>
                    <ProfessionProvider>
                        <Switch>
                            <Route path={"/users/:userId?"} component={Users}/>
                            <Route path={"/login/:type?"} component={Login}/>
                            <Route path={"/"} exact component={Main}/>
                            <Redirect to={"/"}/>
                        </Switch>
                    </ProfessionProvider>
                </QualityProvider>
            </AuthProvider>
            <ToastContainer/>
        </div>
    );
}

export default App;
