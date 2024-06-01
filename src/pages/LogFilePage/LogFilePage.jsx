import React, { useEffect, useState } from "react";
import { Card, Button, message, Typography, Space } from "antd";
import { CloudDownloadOutlined, FileOutlined } from "@ant-design/icons";
import { getLogsList, downloadFile } from "../../services/apiRequests/LogMission";
import styles from "./LogFilePage.module.scss";

const { Text } = Typography;

export const LogFilesPage = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        try {
            const response = await getLogsList();
            if (response.data && Array.isArray(response.data.files)) {
                setLogs(response.data.files);
            } else {
                message.error("Failed to fetch logs: response data does not contain a files array");
            }
        } catch (error) {
            message.error("Failed to fetch logs");
        }
    };

    const handleDownload = async (fileName) => {
        try {
            const response = await downloadFile(fileName);
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            message.success("File downloaded successfully");
        } catch (error) {
            message.error("Failed to download file");
        }
    };

    return (
        <div className={styles.fileStorage}>
            <div className={styles.matrix}>
                {logs.map((log) => (
                    <Card
                        key={log}
                        className={styles.fileCard}
                        actions={[
                            <Button type="link" onClick={() => handleDownload(log)} icon={<CloudDownloadOutlined />}>
                                Download
                            </Button>,
                        ]}
                    >
                        <Space align="center">
                            <FileOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
                            <Text>{log}</Text>
                        </Space>
                    </Card>
                ))}
            </div>
        </div>
    );
};
