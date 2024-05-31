import axios from "axios";

const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/track/`,
});

export const showSwarmsOnMissions = async () => {
    return baseApi.get(`show_swarms_on_missions`);
};

export const infoState = async (model) => {
    return baseApi.get(`info_state`, model);
};
