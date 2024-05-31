import React, { useState } from 'react';
import { Modal, Form, Input, Button, Space, Select } from 'antd';

const { Option } = Select;

const CreateMissionModal = ({ isVisible, onCancel, onCreate, swarms }) => {
    const [newMission, setNewMission] = useState({ name: '', id_swarm_uses: '', targets: [['']] });

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const newTargets = [...newMission.targets];
        newTargets[index][name] = value;
        setNewMission({ ...newMission, targets: newTargets });
    };

    const handleSelectChange = (value) => {
        setNewMission({ ...newMission, id_swarm_uses: value });
    };

    const addTarget = () => {
        setNewMission({ ...newMission, targets: [...newMission.targets, ['']] });
    };

    const handleCreate = () => {
        onCreate(newMission);
        setNewMission({ name: '', id_swarm_uses: '', targets: [['']] }); // Reset the form after creation
    };

    return (
        <Modal
            title="Create New Mission"
            visible={isVisible}
            onCancel={onCancel}
            onOk={handleCreate}
        >
            <Form>
                <Form.Item label="Swarm">
                    <Select
                        value={newMission.id_swarm_uses}
                        onChange={handleSelectChange}
                    >
                        {swarms.map(swarm => (
                            <Option key={swarm.id} value={swarm.id}>
                                {swarm.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Targets">
                    {newMission.targets.map((target, index) => (
                        <Space key={index} style={{ display: 'flex', marginBottom: 8 }}>
                            <Input
                                placeholder="Target"
                                name="0"
                                value={target[0]}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                        </Space>
                    ))}
                    <Button type="dashed" onClick={addTarget}>
                        Add Target
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CreateMissionModal;
