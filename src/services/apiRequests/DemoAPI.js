import axios from "axios";

const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/demo/`,
});

export const generateTrajectory = async (targets, missionData) => {
    try {
        const response = await baseApi.post(`generate_trajectory`, missionData, {
            params: { targets },
        });
        return response.data;
    } catch (error) {
        console.error("Error generating trajectory:", error);
        throw error;
    }
};
    