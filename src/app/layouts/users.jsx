import React from "react";
import { Redirect, Route, useParams } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import UserProvider from "../hooks/useUsers";
import { useAuth } from "../hooks/useAuth";
import PropTypes from "prop-types";
const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    const { currentUser } = useAuth();

    return (
        <>
            <UserProvider>
                {userId ? (
                    edit ? (
                        <Route
                            render={() => {
                                if (userId !== currentUser._id) {
                                    return <Redirect
                                        to={{
                                            pathname: `/users/${currentUser._id}/edit`
                                        }
                                        }/>;
                                }
                                return <EditUserPage />;
                            }
                            }
                        />
                    ) : (
                        <UserPage userId={userId} />
                    )
                ) : (
                    <UsersListPage />
                )}
            </UserProvider>
        </>
    );
};

Users.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Users;
