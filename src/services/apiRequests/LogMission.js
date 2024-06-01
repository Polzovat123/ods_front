import axios from "axios";


const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/log_system/`,
});

// GET all logs
export const getLogsList = async () => {
    return baseApi.get(`list_logs`);
};

export const downloadFile = async (file_name) => {
    return baseApi.get(`download_log_file/${file_name}`).then(res => res.data);
};