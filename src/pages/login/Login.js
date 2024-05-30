import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import classes from "./Login.module.css";

import DefaultInput from "../../components/textInputs/defailtValue/DefaultInput";

const Login = ({ authenticate }) => {
    const navigate = useNavigate();
    const [model, setUser] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState();
    const [isLoading, setLoading] = useState(false);


    const changeField = (field, value) => {
        setUser({ ...model, [field]: value });
    };

    const submit = (e) => {
        e.preventDefault();
        setErrors("");
        authenticate();
    }

    return (
        <>
            <div className={classes.container}>
                <form className={classes.blockInformation} onSubmit={submit}>
                    <h2 className={classes.loginTitle}>Авторизация</h2>
                    <DefaultInput
                        placeholder="Логин"
                        onChange={(e) => {
                            changeField("email", e.target.value);
                        }}
                        value={model.email}
                    ></DefaultInput>
                    <DefaultInput
                        placeholder="Пароль"
                        onChange={(e) => {
                            changeField("password", e.target.value);
                        }}
                        value={model.password}
                        type="password"
                    ></DefaultInput>
                    <div className={classes.infAboutError}>{errors}</div>
                    <Button
                        disabled={isLoading}
                        className={classes.btnLogin}
                        type="submit"
                    >
                        {isLoading ? <>Загрузка...</> : <>Войти</>}
                    </Button>
                    <span className={classes.footerLogin}>
                        Нет аккаунта?
                        <span
                            className={classes.registerLink}
                            onClick={(e) => {
                                navigate("/registration");
                            }}
                        >
                            Зарегистрироваться
                        </span>
                    </span>
                </form>
            </div>
        </>
    );
}

export default Login;
