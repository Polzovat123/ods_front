import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import classes from "./Registration.module.css";

import DefaultInput from "../../components/textInputs/defailtValue/DefaultInput";

const Registration = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        login: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [errors, setErrors] = useState();
    const [isLoading, setLoading] = useState(false);

    const changeField = (field, value) => {
        setUser({ ...user, [field]: value });
    };

    const submit = (e) => {
        e.preventDefault();
        setErrors("");
    }

    return (
        <div className={classes.container}>
      <form className={classes.blockInformation} onSubmit={submit}>
        <h2 className={classes.loginTitle}>Регистрация</h2>
        <DefaultInput
          placeholder="Логин"
          onChange={(e) => {
            changeField("login", e.target.value);
          }}
          value={user.login}
          type="text"
        ></DefaultInput>
        <DefaultInput
          placeholder="Email"
          onChange={(e) => {
            changeField("email", e.target.value);
          }}
          value={user.email}
          type="email"
        ></DefaultInput>
        <DefaultInput
          placeholder="Пароль"
          onChange={(e) => {
            changeField("password", e.target.value);
          }}
          value={user.password}
          type="password"
        ></DefaultInput>
        <DefaultInput
          placeholder="Подтвердите пароль"
          onChange={(e) => {
            changeField("password_confirmation", e.target.value);
          }}
          value={user.password_confirmation}
          type="password"
        ></DefaultInput>

        <div className={classes.infAboutError}>{errors}</div>
        <Button
          disabled={isLoading}
          className={classes.btnRegistration}
          type="submit"
        >
          {isLoading ? <>Загрузка...</> : <>Зарегистрироваться</>}
        </Button>
        <span className={classes.footerRegistration}>
          Уже есть аккаунт?
          <span
            className={classes.loginLink}
            onClick={(e) => {
              navigate("/login");
            }}
          >
            Войти
          </span>
        </span>
      </form>
    </div>
    );
}

export default Registration;
