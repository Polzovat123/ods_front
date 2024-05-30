import axios from "axios";

const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/drone/`,
});

//GET
export const getAllDrones = async () => {
    return baseApi.get(`all_drones`);
};

export const getAddDrones = async () => {
    return baseApi.get(`add_drones`);
};

//POST
export const setDronInfo = async (drone) => {
    return baseApi.post(`info`, drone);
};

//DELETE
export const excludeDrone = async (drone) => {
    return baseApi.delete(`exclude_drone/${drone}`);
};

