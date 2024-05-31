import React from 'react';
import { Button, Upload } from 'antd';

const CardMission = ({ params, onFind, onStart, onFileChange }) => {
    const beforeUpload = (file) => {
        onFileChange(file);
        return false;
    };

    return (
        <div>
            <div>
                <h3>Mission ID: {params.id}</h3>
                <p>id: {params.id}</p>
                <p>time_create: {params.time_create}</p>
                <p>id_swarm_uses: {params.id_swarm_uses}</p>
                <p>targets: {params.targets}</p>
                <p>status: {params.status}</p>
                <Upload beforeUpload={beforeUpload}>
                    <Button>Select File</Button>
                </Upload>
                <Button onClick={onFind}>Path Compute</Button>
                <Button onClick={onStart}>Start Mission</Button>
            </div>
        </div>
    );
};

export default CardMission;
