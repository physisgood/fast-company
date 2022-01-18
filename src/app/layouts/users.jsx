import React from "react";
import PropTypes from "prop-types";
import UserPage from "../components/page/userPage/userPage";
import UsersListPage from "../components/page/usersListPage/usersListPage";
// import { Route, Switch } from "react-router-dom";
import EditPage from "../components/page/editPage/editPage";

const Users = ({ match, location }) => {
    const userId = match.params.userId;
    const renderPage = () => {
        switch (location.pathname) {
            case "/users": {
                return <UsersListPage />;
            }
            case `/users/${userId}`: {
                return <UserPage userId={userId}/>;
            }
            case `/users/${userId}/edit`: {
                return <EditPage userId={userId}/>;
            }
        }
    };
    return <>
        {/* <Switch> */}
        {/*    <Route path={`/users/${userId}/:edit`} component={EditPage}/> */}
        {/* </Switch> */}
        {/* {userId */}
        {/*    ? <UserPage userId={userId}/> */}
        {/*    : <UsersListPage/> */}
        {/*    } */}
        { renderPage() }

    </>;
};

Users.propTypes = {
    match: PropTypes.object,
    location: PropTypes.object
};

export default Users;
