import axios from "axios";


const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/mission/`,
});


// GET
export const getAllMissions = async () => {
    try {
        const response = await baseApi.get("/show_all");
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch missions: ${error.response ? error.response.data.detail : error.message}`);
    }
};

// POST

export const createMission = async (missionData) => {
    try {
        const response = await baseApi.post("/create_mission", missionData);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to create mission: ${error.response ? error.response.data.detail : error.message}`);
    }
};

export const moveToNextStatus = async (missionId) => {
    try {
        const response = await baseApi.post("/next_status", { mission_id: missionId });
        return response.data;
    } catch (error) {
        throw new Error(`Failed to update mission status: ${error.response ? error.response.data.detail : error.message}`);
    }
};

export const checkMissionStatus = async (missionId) => {
    try {
        const response = await baseApi.post("/check_status", { mission_id: missionId });
        return response.data;
    } catch (error) {
        throw new Error(`Failed to check mission status: ${error.response ? error.response.data.detail : error.message}`);
    }
};

export const startMission = async (trajectoryInput) => {
    try {
        const response = await baseApi.post("/start_mission", trajectoryInput);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to start mission: ${error.response ? error.response.data.detail : error.message}`);
    }
};