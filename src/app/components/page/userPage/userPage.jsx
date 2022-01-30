import React, { useState, useEffect } from "react";
import API from "../../../api";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import UserCard from "../../common/userPage/UserCard";
import QualitiesCard from "../../common/userPage/QualitiesCard";
import MeetingsCard from "../../common/userPage/MeetingsCard";
import CommentsList from "../../common/userPage/CommentsList";
// import comments from "../../../api/fake.api/comments.api";


const UserPage = ({ userId }) => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        API.users.getById(userId).then((data) => setCurrentUser(data));
    }, []);

    const history = useHistory();

    const handleReturn = () => {
        history.push("/users");
    };

    const renderUser = (user) => {
        return (
            <div className="container pt-5">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard
                            name={user.name}
                            profession={user.profession.name}
                            rating={user.rate}
                            userId={userId}
                        />
                        <QualitiesCard
                            qualities={user.qualities}
                        />
                        <MeetingsCard
                            meetings={user.completedMeetings}
                        />
                        <button
                            onClick={handleReturn}
                            className={"btn btn-primary"}
                        >
                            Все пользователи
                        </button>
                    </div>
                    <div className="col-md-8">
                        <CommentsList
                            name={user.name}
                            userId={userId}
                        />
                    </div>

                </div>
            </div>
        );
    };
    if (currentUser) {
        return <>
            {renderUser(currentUser)}
        </>;

}
    return <h1>Loading...</h1>;
};

UserPage.propTypes = {
    userId: PropTypes.string,
    match: PropTypes.object
};

export default UserPage;
