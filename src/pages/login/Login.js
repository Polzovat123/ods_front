import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import { login } from '../../services/apiRequests/AuthAPI'

import classes from "./Login.module.css";

import DefaultInput from "../../components/textInputs/defailtValue/DefaultInput";

const Login = ({ authenticate }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: "",
    });


    const [errors, setErrors] = useState();
    const [isLoading, setLoading] = useState(false);


    const changeField = (field, value) => {
        setUser({ ...user, [field]: value });
    };


    const submit = (e) => {
        e.preventDefault();
        setErrors("");

        setLoading(true);
        (async () => {
            login(user)
                .then((response) => {
                    console.log(response);
                    
                    authenticate();
                })
                .catch((error) => {
                    console.log('error ', error);
                });
        })();
        setLoading(false);

    }

    return (
        <>
            <div className={classes.container}>
                <form className={classes.blockInformation} onSubmit={submit}>
                    <h2 className={classes.loginTitle}>Авторизация</h2>
                    <DefaultInput
                        placeholder="Логин"
                        onChange={(e) => {
                            changeField("username", e.target.value);
                        }}
                        value={user.username}
                    ></DefaultInput>
                    <DefaultInput
                        placeholder="Пароль"
                        onChange={(e) => {
                            changeField("password", e.target.value);
                        }}
                        value={user.password}
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
