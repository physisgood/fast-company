import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import AddCommentForm from "./addCommentForm";
import PropTypes from "prop-types";
import api from "../../../api";

const CommentsList = ({ userId, name }) => {
    const [comment, setComment] = useState();
    const [data, setData] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleRemove = (id) => {
        api.comments.remove(id);
        setComment(comment.filter((c) => c._id !== id));
    };
    useEffect(() => {
        api.comments.fetchCommentsForUser(userId).then((data) => setComment(data.sort((a, b) => b.created_at - a.created_at)));
    }, []);

    const publishComment = () => {
        const text = document.getElementById("text").value;
        const pageId = document.location.pathname.split("/")[2];
        api.comments.add({
            userId: data.users,
            pageId: pageId,
            content: text
        });
        api.comments.fetchCommentsForUser(userId).then((data) => setComment(data.sort((a, b) => b.created_at - a.created_at)));
    };

    return (
        <div>
            <div className="card mb-2">
                {" "}
                <div className="card-body ">
                    <AddCommentForm
                        handleChange={handleChange}
                        publish={publishComment}
                    />
                </div>
            </div>
            {comment && comment.length > 0
                ? (
                    <div className="card mb-3">
                        <div className="card-body ">
                            <h2>Comments</h2>
                            <hr/>
                            {
                                comment.map((comment) => (
                                    <Comments
                                        className="small mb-0"
                                        key={comment._id}
                                        content={comment.content}
                                        userId={comment.userId}
                                        publishedTime={comment.created_at}
                                        commentId={comment._id}
                                        remove={handleRemove}
                                    />
                                ))
                            }

                        </div>
                    </div>
                )
                : (
                    ""
                )
            }

        </div>

    );
};

CommentsList.propTypes = {
    name: PropTypes.string,
    comments: PropTypes.array,
    userId: PropTypes.string
};

export default CommentsList;
