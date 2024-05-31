import axios from "axios";


const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/planning/`,
});


export const searchTrajectory = async (requestData) => {
    return baseApi.post('/search_trajectory', requestData);
};

export const searchTrajectoryWithFile = (missionId, typeModel, formData) => {
    const url = `/planning/search_trajectory/use_file`;
    return axios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response => response.data)
    .catch(error => {
        console.error('Error searching trajectory:', error);
        throw error;
    });
};