import React, { useState, useEffect } from "react";
import API from "../../../api";
import PropTypes from "prop-types";
import Quality from "../../ui/qualities/quality";
import { Link, useHistory } from "react-router-dom";

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
            <div className={"p-5"}>
                <h1>Имя: {user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <h6>Качества:
                    {user.qualities.map((qual) => (
                        <Quality key={qual._id} {...qual} />
                    ))}
                </h6>
                <h6>Завершенные свидания: {user.completedMeetings}</h6>
                <h2>Рейтинг пользователя: {user.rate}</h2>
                <div className={"btn btn-primary mt-5"}>
                    <button
                        onClick={handleReturn}
                        className={"btn btn-primary"}
                    >
                        Все пользователи
                    </button>
                    {" / "}
                    <Link
                        to={`/users/${userId}/edit`}
                        className={"btn btn-primary"}
                    >
                        Редактировать пользователя
                    </Link>
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
