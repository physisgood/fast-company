import React, { useEffect, useState } from "react";
import { SelectField } from "../form";
import api from "../../../api";
import PropTypes from "prop-types";

const AddCommentForm = ({ publish, handleChange }) => {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    return (
        <form id={"addComment"}>
            <h3>Новый комментарий</h3>
                    <SelectField
                        options={users || []}
                        onChange={handleChange}
                        defaultOption={"Выберите пользователя"}
                        name={"users"}
                    />
            <textarea
                className="form-control"
                rows={3}
                placeholder={"Ваш комментарий..."}
                id={"text"}
            />
            <div className={"d-grid gap-2 d-md-flex justify-content-md-end"}>
                <button
                    type={"reset"}
                    className={"btn btn-primary md-4 mt-3"}
                    onClick={publish}
                >
                    Опубликовать
                </button>
            </div>
        </form>
    );
};

AddCommentForm.propTypes = {
    publish: PropTypes.func,
    handleChange: PropTypes.func
};

export default AddCommentForm;
