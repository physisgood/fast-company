import React, { useEffect, useState } from "react";
// import API from "../../../api";
import PropTypes from "prop-types";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import api from "../../../api";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import { validator } from "../../../utils/validator";
import { useHistory } from "react-router-dom";

const EditPage = ({ userId }) => {
    const [currentUser, setCurrentUser] = useState({
        email: ``,
        name: ``,
        profession: "",
        sex: "",
        qualities: []
    });
    const [data, setData] = useState({
        email: "",
        name: "",
        profession: "",
        sex: "",
        qualities: []
    });
    const [professions, setProfession] = useState();
    const [qualities, setQualities] = useState();
    const history = useHistory();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.qualities.fetchAll().then((data) => setQualities(data));
        api.users.getById(userId).then((data) => setCurrentUser(data));
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    useEffect(() => {
        setData((prevState) => ({
            ...prevState,
            email: `${currentUser.email}`,
            name: `${currentUser.name}`,
            sex: `${currentUser.sex}`,
            profession: currentUser.profession._id,
            qualities: transformIt(currentUser.qualities)
        }));
    }, [currentUser]);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Введите ваше имя"
            }
        },
        qualities: {
            Select: {
                message: "Укажите хотя бы одно своё качество"
            }
        }
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const getProfessionById = (id) => {
        for (const prof in professions) {
            const profData = professions[prof];
            if (profData._id === id) return profData;
        }
    };

    const getQualities = (elements) => {
        const qualitiesArray = [];
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality]._id) {
                    qualitiesArray.push(qualities[quality]);
                }
            }
        }
        return qualitiesArray;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { profession, qualities } = data;
        api.users.update(userId, {
                ...data,
                profession: getProfessionById(profession),
                qualities: getQualities(qualities)
            })
            .then((data) => history.push(`/users/${data._id}`));
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // const window = document.querySelector("root");
    //
    // window.addEventListener("click", validate);

    const isValid = Object.keys(errors).length === 0;

    function transformIt(data) {
        return data.map((qual) => ({ label: qual.name, value: qual._id }));
    };

    return (
        <div
            className={"container mt-5"}
            onClick={validate}
        >
            <div className="row">
                <div className={"col-md-6 offset-md-3 shadow p-4"}>
                    {currentUser.name !== ""
                        ? (
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label={"Имя"}
                                    type={"text"}
                                    name={"name"}
                                    onChange={handleChange}
                                    value={data.name}
                                    error={errors.name}
                                    onSelect={validate}
                                />
                                <TextField
                                    label={"Электронная почта"}
                                    type={"text"}
                                    name={"email"}
                                    onChange={handleChange}
                                    value={data.email}
                                    error={errors.email}
                                    onSelect={validate}
                                />

                                <SelectField
                                    label={"Выберите вашу профессию"}
                                    defaultOption={"Choose..."}
                                    name={"profession"}
                                    options={professions}
                                    onChange={handleChange}
                                    value={data.profession}
                                    error={errors.profession}
                                />

                                <RadioField
                                    options={[
                                        { name: "Male", value: "male" },
                                        { name: "Female", value: "female" },
                                        { name: "Other", value: "other" }
                                    ]}
                                    value={data.sex}
                                    name={"sex"}
                                    onChange={handleChange}
                                    label={"Выберите ваш пол"}
                                />

                                <MultiSelectField
                                    onChange={handleChange}
                                    options={qualities}
                                    name={"qualities"}
                                    label={"Выберите ваши качества"}
                                    defaultValue={data.qualities}
                                    error={errors.qualities}
                                    onSelect={validate}
                                />

                                <button
                                    className={"btn btn-primary w-100"}
                                    disabled={!isValid}
                                >
                                    Обновить
                                </button>
                            </form>
                        )
                        : (
                            "loading..."
                        )}

                </div>
            </div>
        </div>
    );
};

EditPage.propTypes = {
    userId: PropTypes.string,
    match: PropTypes.object
};

export default EditPage;
