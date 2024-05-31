import axios from "axios";

const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/auth/`,
});


export const login = async (model) => {
    return baseApi.post(`login`, model);
};

export const register = async (model) => {
    return baseApi.post(`register`, model);
};