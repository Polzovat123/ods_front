import React, { useEffect, useState } from "react";
import { Card, Button, Modal, Upload, message } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { checkStorageAvailable, listFiles, getFile, uploadFirmware, deleteFile } from "../../services/apiRequests/FileStorageAPI";
import styles from "./FileStorage.module.scss";

export const FileStorage = () => {
    const [files, setFiles] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        try {
            const response = await listFiles();
            setFiles(response.data.files);
        } catch (error) {
            message.error("Failed to fetch files");
        }
    };

    const handleUpload = async ({ file }) => {
        try {
            await uploadFirmware(file);
            message.success("File uploaded successfully");
            fetchFiles();
            setIsModalOpen(false);
        } catch (error) {
            message.error("Failed to upload file");
        }
    };

    const handleDelete = async (fileName) => {
        try {
            await deleteFile(fileName);
            message.success("File deleted successfully");
            fetchFiles();
        } catch (error) {
            message.error("Failed to delete file");
        }
    };

    return (
        <div className={styles.fileStorage}>
            <div className={styles.header}>
                <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalOpen(true)}>
                    Add File
                </Button>
            </div>
            <div className={styles.fileGrid}>
                {files.map((file) => (
                    <Card
                        key={file}
                        title={file}
                        actions={[
                            <Button type="link" onClick={() => handleDelete(file)}>Delete</Button>,
                        ]}
                    >
                        <p>{file}</p>
                    </Card>
                ))}
            </div>

            <Modal
                title="Upload Firmware"
                visible={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
            >
                <Upload
                    customRequest={handleUpload}
                    showUploadList={false}
                >
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            </Modal>
        </div>
    );
};
