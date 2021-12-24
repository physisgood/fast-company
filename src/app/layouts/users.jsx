import React from "react";
import PropTypes from "prop-types";
import UserPage from "../components/userPage";
import UsersList from "../components/usersList";

const Users = ({ match }) => {
    const userId = match.params.userId;
    return <>
        {userId
            ? <UserPage userId={userId}/>
            : <UsersList/>
            }
    </>;
};

Users.propTypes = {
    match: PropTypes.object
};

export default Users;
