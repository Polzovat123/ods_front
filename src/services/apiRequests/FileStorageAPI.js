import axios from "axios";

const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/firmware/`,
});

// GET
export const checkStorageAvailable = () => {
    return baseApi.get(`/`);
}

export const listFiles = async () => {
    return baseApi.get(`list_firmware_files`);
}

export const getFile = async (file_name) => {
    return baseApi.get(`download_firmware_file/${file_name}`);
}

// POST
export const uploadFirmware = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    return baseApi.post(`upload_firmware_to_store`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

// DELETE
export const deleteFile = (file_name) => {
    return baseApi.delete(`delete_firmware_file/${file_name}`);
}
