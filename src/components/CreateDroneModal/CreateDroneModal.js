import { Button, Form, Input, Modal } from "antd"

export const CreateDroneModal = ({ isOpen, setIsOpen, onCreate }) => {
    const handleSubmit = (values) => {
        onCreate(values);
    }

    return (
        <Modal 
            title='Create drone' 
            footer={null} 
            open={isOpen} 
            onCancel={() => setIsOpen(false)} 
        >
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 19 }}
                onFinish={handleSubmit}
            >
                <Form.Item label='IP' name='ip' rules={[{required: true}]}>
                    <Input />
                </Form.Item>

                <Form.Item label='Type' name='type' rules={[{required: true}]}>
                    <Input />
                </Form.Item>

                <Form.Item label='Role' name='role' rules={[{required: true}]}>
                    <Input />
                </Form.Item>

                <Form.Item label='Name' name='name' rules={[{required: true}]}>
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