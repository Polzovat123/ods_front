import axios from "axios";

const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/drone/`,
});

//GET
export const getAllDrones = async () => {
    return baseApi.get(`all_drones`).then(res => res.data);
};

export const setDronInfo = async () => {
    return baseApi.get(`info`);
};

//POST
export const createDrone = (drone) => {
    return baseApi.post(`add_drone`, drone).then(res => res.data)
};


//DELETE
export const excludeDrone = async (drone) => {
    return baseApi.delete(`exclude_drone/${drone}`);
};

