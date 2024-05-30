import axios from "axios";

const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/swarm/`,
});

//GET
export const getSwarmInfo = async (swarm) => {
    return baseApi.get(`info`, swarm);
};

export const getSwarmTask = async (swarm) => {
    return baseApi.get(`get_task`, swarm);
};

export const getSwarmsList = async (swarm) => {
    return baseApi.get(`swarms`, swarm).then(res => res.data);
};

export const getSwarmConfig = async (swarm) => {
    return baseApi.get(`get_config`, swarm);
};

//POST
export const createSwarm = async (swarm) => {
    return baseApi.post(`create`, swarm);
};

export const updateSwarm = async (swarm) => {
    return baseApi.post(`update`, swarm);
};

export const addDroneToSwarm = async (swarm) => {
    return baseApi.post(`add_drone_to_swarm`, swarm);
};

//DELETE
export const removeDrone = async (swarm_id, drone_id) => {
    return baseApi.post(`remove_drone`,{swarm_id, drone_id});
};

export const deleteSwarmConfig = async (swarm_id) => {
    return baseApi.post(`delete_config`,{swarm_id});
};

//PUT
export const setSwarmConfig = async (swarm) => {
    return baseApi.post(`set_config`, {swarm});
};