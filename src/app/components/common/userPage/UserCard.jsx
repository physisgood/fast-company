import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserCard = ({ name, profession, rating, userId }) => {
    return (
            <div className="card mb-3">
                <div className="card-body">
                     <Link
                        to={`/users/${userId}/edit`}
                        className={"position-absolute top-0 end-0 btn btn-light btn-sm"}
                     >
                         <i className="bi bi-gear"/>
                     </Link>
                    <div className="d-flex flex-column align-items-center text-center position-relative">
                        <img
                            src={`https://avatars.dicebear.com/api/avataaars/${(
                                Math.random() + 1
                            )
                                .toString(36)
                                .substring(7)}.svg`}
                            className="rounded-circle shadow-1-strong me-3"
                            alt="avatar"
                            width="65"
                            height="65"
                        />
                        <div className="mt-3">
                            <h4>{name}</h4>
                            <p className="text-secondary mb-1">{profession}</p>
                            <div className="text-muted">
                                <i className="bi bi-caret-down-fill text-primary" role="button"/>
                                <i className="bi bi-caret-up text-secondary" role="button"/>
                                <span className="ms-2">{rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

UserCard.propTypes = {
    name: PropTypes.string,
    profession: PropTypes.string,
    rating: PropTypes.number,
    userId: PropTypes.string
};

export default UserCard;
