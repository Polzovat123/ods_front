import axios from "axios";

const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/track/`,
});

// GET
export const trackAllMissions = async () => {
    return baseApi.get(`show_swarms_on_missions`).then(res => res.data);
};

export const getPercentComplete = async (mission_id) => {
    return baseApi.get(`info_state`, { params: { mission_id } }).then(res => res.data);
};

export const getStartMap = async (mission_id, height, width) => {
    try {
        const response = await baseApi.get(`frame/info_state`, {
            params: { mission_id, height, width },
            responseType: 'blob' 
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching image:", error);
        throw error;
    }
};

export const getCurrentMap = async (mission_id, height, width) => {
    try {
        const response = await baseApi.get(`frame/current_position`, {
            params: { mission_id, height, width },
            responseType: 'blob' 
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching current map:", error);
        throw error;
    }
};