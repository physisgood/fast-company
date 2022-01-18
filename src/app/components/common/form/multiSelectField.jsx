import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultiSelectField = ({ options, onChange, name, label, defaultValue, error, onSelect }) => {
    const optionsArray = !Array.isArray(options) && typeof (options) === "object"
        ? Object.keys(options).map((optionName) => ({ label: options[optionName].name, value: options[optionName]._id }))
        : options;

    const handleChange = (value) => {
        onChange({ name: name, value });
    };

    const getInputClasses = () => {
        return "basic-multi-select" + (error ? " is-invalid" : "");
    };

    return (
        <div
            className={"mb-4"}
            onSelect={onSelect}
        >
            <label className="form-label">
                { label }
            </label>
            <Select
                hasValue={true}
                isMulti
                closeMenuOnSelect={false}
                value={defaultValue}
                options={optionsArray}
                className={getInputClasses()}
                classNamePrefix={"select"}
                onChange={handleChange}
            />
            {error && <div className={"invalid-feedback"}>{error}</div>}
        </div>
    );
};

MultiSelectField.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    name: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.array,
    error: PropTypes.string,
    onSelect: PropTypes.func
};

export default MultiSelectField;
