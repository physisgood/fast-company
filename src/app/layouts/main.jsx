import React from "react";
import useMockData from "../utils/mockData";
import { getRegistratedValue } from "../service/localStorage.service";

const Main = () => {
    const { error, initialize, progress, status } = useMockData();
    const isRegistered = getRegistratedValue() || false;
    const handleClick = () => {
        console.log("click");
        initialize();
    };

    return (
        <div className={"container mt-5"}>
            <h1>Main Page</h1>
            <h1>{isRegistered ? <span className={"badge m-1 bg-primary"}>Пользователь авторизован</span> : <span className={"badge m-1 bg-danger"}>Пользователь не авторизован</span>}</h1>
            <h3>Инициализация данных в FireBase</h3>
            <ul>
                <li>Status: {status}</li>
                <li>Progress: {progress}%</li>
                {error && <li>Error: {error}</li>}
            </ul>
            <button className={"btn btn-primary"} onClick={handleClick}>
                Инициализировать
            </button>
        </div>
    );
};

export default Main;
