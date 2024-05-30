import axios from "axios";

const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/drone/`,
});

export const all_drones = async (drone) => {
    return baseApi.get(`all_drones`, drone);
};

export const add_drones = async (drone) => {
    return baseApi.get(`add_drones`, drone);
};

export const info = async (drone) => {
    return baseApi.post(`info`, drone);
};

export const exclude_drone = async (drone) => {
    return baseApi.delete(`exclude_drone/${drone_id}`);
};

