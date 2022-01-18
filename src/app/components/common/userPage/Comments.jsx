import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";

const Comments = ({ content, userId, publishedTime, commentId, remove }) => {
    const [user, setUser] = useState();

    function toISODate(milliseconds, mark) {
        const date = new Date(milliseconds);
        const y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        const h = date.getHours();
        const min = date.getMinutes();
        m = (m < 10) ? "0" + m : m;
        d = (d < 10) ? "0" + d : d;
        if (mark === "iso") {
            return [d, m, y].join(".");
        } else if (mark === "hours") {
            return [h, min].join(":");
        } else if (mark === "days") {
            return [d, m].join(".");
        }
    }
    const ISODate = toISODate(Number(publishedTime), "iso");
    const hoursNminutes = toISODate(Number(publishedTime), "hours");
    const daysNmonths = toISODate(Number(publishedTime), "days");

    const renderDate = () => {
        const date = new Date();
        const milliseconds = date.getTime();
        const difference = milliseconds - publishedTime;
        if (difference < 60000) {
            return "Менее минуты назад";
        } else if (difference > 60000 && difference < 300000) {
            return "5 минут назад";
        } else if (difference > 300000 && difference < 600000) {
            return "10 минут назад";
        } else if (difference > 600000 && difference < 1800000) {
            return "30 минут назад";
        } else if (difference > 1800000 && difference < 86400000) {
            return `${hoursNminutes}`;
        } else if (difference > 86400000 && difference < 31540000000) {
            return `${daysNmonths}`;
        } else if (difference > 31540000000) {
            return `${ISODate}`;
        }
    };

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    return user
        ? (
            <div className="bg-light card-body  mb-3">
                <div className="row">
                    <div className="col">
                        <div className="d-flex flex-start ">
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
                            <div className="flex-grow-1 flex-shrink-1">
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-1 ">
                                            {user.name}{" "}
                                            <span className="small text-black-50">{renderDate()}</span>
                                        </p>
                                        <button
                                            className="btn btn-sm text-primary d-flex align-items-center"
                                            onClick={() => remove(commentId)}
                                        >
                                            <i className="bi bi-x-lg"/>
                                        </button>
                                    </div>
                                    <p className="small mb-0">
                                        {content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        : ("...");
};

Comments.propTypes = {
    userId: PropTypes.string,
    comments: PropTypes.array,
    content: PropTypes.string,
    publishedTime: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    commentId: PropTypes.string,
    remove: PropTypes.func
};

export default Comments;
