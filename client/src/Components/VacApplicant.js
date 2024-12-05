import React, { useState } from 'react';
import { CloseOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Select, Card, DatePicker, Form, Input, Upload, Row, Col, message } from 'antd';
import dayjs from 'dayjs';
import './vacapplicant.css';
import axios from 'axios';

const dateTimestamp = dayjs('2024-01-01').valueOf();

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const { Option } = Select;

const VacApplicant = () => {
    const [form] = Form.useForm();
    const [currentPage, setCurrentPage] = useState(0);
    const [pageOneValues, setPageOneValues] = useState({}); 

    const nextPage = async () => {
        try {
            const values = await form.validateFields(); // Get validated values
            if (currentPage < 1) {
                setPageOneValues(values); // Save page 1 values
                setCurrentPage(currentPage + 1);
            }
        } catch (errorInfo) {
            console.log('Validation Failed:', errorInfo);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const onFinish = async (values) => {
        const combinedValues = { ...pageOneValues, ...values }; // Combine values from both pages
        console.log('Submitting:', combinedValues);
        try {
            // Send a POST request to your backend
            const response = await axios.post('https://your-backend-api.com/endpoint', combinedValues);
            message.success('Form submitted successfully!');
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
            message.error('Failed to submit form. Please try again.');
        }
    };

    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            form={form}
            name="vacancy_applicant"
            style={{
                padding: 50,
                margin: '0 auto',
                maxWidth: 800,
            }}
            initialValues={{ date: dateTimestamp }}
            onFinish={onFinish}
            autoComplete="off"
        >
            {currentPage === 0 && (
                <Card size="small" title="Application Form">
                    <Form.Item
                        label="ሙሉ ስም"
                        name="name"
                        rules={[{ required: true, message: 'Please enter your Name' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Name"
                        name="ename"
                        rules={[{ required: true, message: 'Please enter your Name' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Birth Date" name="birthDate">
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        name="Upload"
                        label="CV"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        label="Gender"
                        name="gender"
                        rules={[{ required: true, message: 'Please select your gender!' }]}
                    >
                        <Select>
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="nationality"
                        label="Nationality"
                        rules={[{ required: true, message: 'Please select your nationality!' }]}
                    >
                        <Select placeholder="">
                            <Option value="ethiopia">Ethiopia</Option>
                            <Option value="usa">U.S.A</Option>
                            <Option value="kenya">Kenya</Option>
                        </Select>
                    </Form.Item>

                    <Button 
                        type="primary" 
                        onClick={nextPage} 
                        style={{ width: 200, display: 'block', margin: '0 auto' }}
                    >
                        Next
                    </Button>
                </Card>
            )}

            {currentPage === 1 && (
                <Card size="small" title="Location Details">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="City/Region"
                                name="city"
                                rules={[{ required: true, message: 'Please enter your city/region!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Subcity/Zone"
                                name="subcity"
                                rules={[{ required: true, message: 'Please enter your subcity/zone!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Wereda"
                                name="wereda"
                                rules={[{ required: true, message: 'Please enter your wereda!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Kebele"
                                name="kebele"
                                rules={[{ required: true, message: 'Please enter your kebele!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="House Number"
                                name="houseNumber"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[{ required: true, message: 'Please enter your phone number!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Alternate Phone"
                                name="alternatePhone"
                                rules={[{ required: false }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ type: 'email', message: 'Please enter a valid email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Button type="default" onClick={prevPage} style={{ width: 200, display: 'block', margin: '0 auto' }}>
                        Previous
                    </Button>
                   
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        style={{ width: 200, display: 'block', margin: '2 auto' }}
                    >
                        Submit
                    </Button>
                </Card>
            )}
        </Form>
    );
};

export default VacApplicant;