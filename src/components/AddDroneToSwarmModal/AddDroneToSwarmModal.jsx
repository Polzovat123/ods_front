import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Select, notification } from "antd";
import { getAllFreeDrones } from "../../services/apiRequests/DroneAPI";

export const AddDroneToSwarmModal = ({ isOpen, setIsOpen, onAdd, swarms }) => {
    const [freeDrones, setFreeDrones] = useState([]);
    const [selectedDrone, setSelectedDrone] = useState(null);
    const [selectedSwarm, setSelectedSwarm] = useState(null);

    useEffect(() => {
        if (isOpen) {
            getAllFreeDrones()
                .then(drones => {
                    setFreeDrones(drones);
                })
                .catch(console.error);
        }
    }, [isOpen]);

    const handleSubmit = () => {
        onAdd(selectedSwarm, selectedDrone)
            .then(() => {
                notification.success({
                    message: 'Success',
                    description: 'Drone successfully added to the swarm.',
                });
                setIsOpen(false);
            })
            .catch(() => {
                notification.error({
                    message: 'Error',
                    description: 'There was an error adding the drone to the swarm.',
                });
            });
    };

    return (
        <Modal
            title='Add Drone to Swarm'
            footer={null}
            open={isOpen}
            onCancel={() => setIsOpen(false)}
        >
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 19 }}
                onFinish={handleSubmit}
            >
                <Form.Item label='Swarm' name='swarm' rules={[{ required: true }]}>
                    <Select
                        onChange={(value) => setSelectedSwarm(value)}
                        placeholder="Select a swarm"
                    >
                        {swarms.map(swarm => (
                            <Select.Option key={swarm.id} value={swarm.id}>
                                {swarm.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item label='Drone' name='drone' rules={[{ required: true }]}>
                    <Select
                        onChange={(value) => setSelectedDrone(value)}
                        placeholder="Select a drone"
                    >
                        {freeDrones.map(drone => (
                            <Select.Option key={drone.id} value={drone.id}>
                                {drone.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add Drone
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};
