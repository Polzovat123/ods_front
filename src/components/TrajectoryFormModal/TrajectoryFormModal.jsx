// src/components/TrajectoryFormModal/TrajectoryFormModal.js
import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const TrajectoryFormModal = ({ isVisible, onCancel, onSubmit }) => {
    const [form] = Form.useForm();

    const handleSubmit = () => {
        form.validateFields().then(values => {
            onSubmit(values);
            form.resetFields();
        });
    };

    return (
        <Modal
            visible={isVisible}
            title="Generate Trajectory"
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>Cancel</Button>,
                <Button key="submit" type="primary" onClick={handleSubmit}>Submit</Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    name="targets"
                    label="Targets"
                    rules={[{ required: true, message: 'Please input the number of targets!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="use_algo"
                    label="Use Algorithm"
                    rules={[{ required: true, message: 'Please input the algorithm!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="latitude_min"
                    label="Latitude Min"
                    rules={[{ required: true, message: 'Please input the minimum latitude!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="latitude_max"
                    label="Latitude Max"
                    rules={[{ required: true, message: 'Please input the maximum latitude!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="longitude_min"
                    label="Longitude Min"
                    rules={[{ required: true, message: 'Please input the minimum longitude!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="longitude_max"
                    label="Longitude Max"
                    rules={[{ required: true, message: 'Please input the maximum longitude!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default TrajectoryFormModal;
