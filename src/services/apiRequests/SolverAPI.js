import axios from "axios";


const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/planning/`,
});

export const searchTrajectoryWithFile = (missionId, typeModel, formData) => {
    const url = `/search_trajectory/use_file`;
    return baseApi.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params: {
            mission_id: missionId,
            type_model: typeModel
        }
    })
    .then(response => response.data)
    .catch(error => {
        console.error('Error searching trajectory:', error);
        throw error;
    });
};