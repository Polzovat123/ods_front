import axios from "axios";


const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/planning/`,
});


export const searchTrajectory = async (requestData) => {
    return baseApi.post('/search_trajectory', requestData);
};

export const searchTrajectoryWithFile = async (missionId, typeModel, file) => {
    const formData = new FormData();
    formData.append('mission_id', missionId);
    formData.append('type_model', typeModel);
    formData.append('file_bytes', file);

    return baseApi.post('/search_trajectory/use_file', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};