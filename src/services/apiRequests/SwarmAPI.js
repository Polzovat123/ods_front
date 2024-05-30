import axios from "axios";

const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/swarm/`,
});

//GET
export const info = async (swarm) => {
    return baseApi.get(`info`, swarm);
};

export const get_task = async (swarm) => {
    return baseApi.get(`get_task`, swarm);
};

export const swarms = async (swarm) => {
    return baseApi.get(`swarms`, swarm);
};

export const get_config = async (swarm) => {
    return baseApi.get(`get_config`, swarm);
};

//POST
export const create = async (swarm) => {
    return baseApi.post(`create`, swarm);
};

export const update = async (swarm) => {
    return baseApi.post(`update`, swarm);
};

export const add_drone_to_swarm = async (swarm) => {
    return baseApi.post(`add_drone_to_swarm`, swarm);
};

//DELETE
export const remove_drone = async (swarm_id, drone_id) => {
    return baseApi.post(`remove_drone`,{swarm_id, drone_id});
};

export const delete_config = async (swarm_id) => {
    return baseApi.post(`delete_config`,{swarm_id});
};

//PUT
export const set_config = async (swarm) => {
    return baseApi.post(`set_config`, {swarm});
};