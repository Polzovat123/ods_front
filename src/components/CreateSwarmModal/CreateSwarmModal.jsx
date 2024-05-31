import { Button, Form, Input, Modal } from "antd"

export const CreateSwarmModal = ({ isOpen, setIsOpen, onCreate }) => {
    const handleSubmit = (values) => {
        onCreate(values);
    }

    return (
        <Modal 
            title='Create swarm' 
            footer={null} 
            open={isOpen} 
            onCancel={() => setIsOpen(false)} 
        >
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 19 }}
                onFinish={handleSubmit}
            >
                <Form.Item label='Name' name='name' rules={[{required: true}]}>
                    <Input />
                </Form.Item>

                <Form.Item label='Description' name='description' rules={[{required: true}]}>
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}