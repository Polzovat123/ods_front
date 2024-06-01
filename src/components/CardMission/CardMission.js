import React, { useState } from 'react';
import { Button, Upload, message } from 'antd';
import styles from './CardMission.module.scss';
import TrajectoryFormModal from '../TrajectoryFormModal/TrajectoryFormModal';

const CardMission = ({ params, onFind, onStart, onFileChange, onCutGis }) => {
    const [isFileSelected, setIsFileSelected] = useState(false);
    const [isPathComputed, setIsPathComputed] = useState(false);
    const [isMissionStarted, setIsMissionStarted] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const beforeUpload = (file) => {
        onFileChange(file);
        setIsFileSelected(true);
        return false;
    };

    const handlePathFind = () => {
        onFind()
            .then(() => {
                setIsPathComputed(true);
            });
    };

    const handleStartMission = () => {
        onStart()
            .then(() => {
                setIsMissionStarted(true);
            });
    };

    const handleCutGis = () => {
        setIsModalVisible(true);
    };

    const handleModalSubmit = (formData) => {
        onCutGis(params.id, formData)
            .then(() => {
                setIsModalVisible(false);
                message.success('Trajectory generated successfully');
            })
            .catch(() => {
                message.error('Failed to generate trajectory');
            });
    };

    const getMissionClassName = () => {
        switch (params.status) {
            case 'настройка':
                return styles.mission__status_setup;
            case 'ожидание':
                return styles.mission__status_waiting;
            case 'на задании':
                return styles.mission__status_on_mission;
            default:
                return '';
        }
    };

    return (
        <div className={`${styles.mission} ${getMissionClassName()}`}>
            <h3>Mission ID: {params.id}</h3>
            <p>id: {params.id}</p>
            <p>time_create: {params.time_create}</p>
            <p>id_swarm_uses: {params.id_swarm_uses}</p>
            <p>targets: {params.targets}</p>
            <p>status: {params.status}</p>

            <div className={styles.mission__buttons}>
                <Upload beforeUpload={beforeUpload} disabled={params.status !== 'настройка'}>
                    <Button type="primary" disabled={params.status !== 'настройка' || isFileSelected}>Select File</Button>
                </Upload>

                <Button type="primary" onClick={handleCutGis} disabled={params.status !== 'настройка'}>
                    Cut Gis
                </Button>

                <Button type="primary" onClick={handlePathFind} disabled={params.status !== 'настройка' || isPathComputed}>
                    Path Compute
                </Button>

                <Button type="primary" onClick={handleStartMission} disabled={params.status !== 'ожидание' || isMissionStarted}>
                    Start Mission
                </Button>
            </div>

            <TrajectoryFormModal
                isVisible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                onSubmit={handleModalSubmit}
            />
        </div>
    );
};

export default CardMission;
