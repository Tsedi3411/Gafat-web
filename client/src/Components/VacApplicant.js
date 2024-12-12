import React, { useState } from 'react';
import { CloseOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Select, Card, DatePicker, Form, Input, Upload, Row, Col, message } from 'antd';
import dayjs from 'dayjs';
import axios from 'axios';
import moment from 'moment';
import './vacapplicant.css'


const dateTimestamp = dayjs('2024-01-01').valueOf();



const { Option } = Select;

const VacApplicant = () => {
    const [form] = Form.useForm();
    const [currentPage, setCurrentPage] = useState(0);
    const [pageOneValues, setPageOneValues] = useState({});
    const [fileList, setFileList] = useState([]);

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };


    const handleUploadChange = async (info) => {
        let newFileList = [...info.fileList];
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
            newFileList = newFileList.slice(-1); // Keep only the last uploaded file
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
        setFileList(newFileList);
    };

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

    // const onFinish = async (values) => {
    //     const combinedValues = { ...pageOneValues, ...values }; // Combine values from both pages
    //     console.log('Submitting:', combinedValues);
    //     try {
    //         // Send a POST request to your backend
    //         const response = await axios.post('https://your-backend-api.com/endpoint', combinedValues);
    //         message.success('Form submitted successfully!');
    //         console.log('Response:', response.data);
    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //         message.error('Failed to submit form. Please try again.');
    //     }
    // };

    const [applicationData, setApplicationData] = useState({
        dateOfBirth: '',
        sex: '',
        nationality: '',
        city: '',
        sibcity: '',
        wereda: '',
        kebele: '',
        houseNo: '',
        phone: '',
        email: '',
        otherPhone: '',
        vacancy: '',
        fullNameEnglish: '',
        fullName: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setApplicationData({ ...applicationData, [name]: value });
    }
    const onFinish = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://5.75.167.208:8080/vacancy/addapplicant', applicationData);
            console.log('Applicant Added Successfully', response.data)
        } catch (error) {
            console.log('error add applicant', error)
        }


    }


    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            form={form}
            name="vacancy_applicant"
            style={{
                padding: 50,
                margin: '0 auto',
                paddingTop: 100,
                maxWidth: 600,

            }}
            initialValues={{ date: dateTimestamp }}
            onFinish={onFinish}
            autoComplete="off"
        >
            {currentPage === 0 && (
                <Card size="small" title="Application Form" style={{
                    display: 'flex',
                    alignContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Form.Item
                        label="ሙሉ ስም"
                        name="fullName"
                        onChange={handleChange}
                        rules={[{ required: true, message: 'Please enter your Name' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Name"
                        name="fullNameEnglish"
                        onChange={handleChange}
                        rules={[{ required: true, message: 'Please enter your Name' }]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label="Birth Date"
                        type="date"
                        name="dateOfBirth"
                        onChange={handleChange}
                        rules={[{ required: true, message: 'Please select your birth date!' }]}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'right', color: 'black' }}
                    >
                        <DatePicker
                            format="YYYY-MM-DD"
                            style={{ width: '100%', maxWidth: '300px', color: 'black' }}

                        />
                    </Form.Item>

                    <Form.Item
                        name="Upload"
                        label="CV"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload
                            name="logo"
                            listType="picture"

                            fileList={fileList}
                            onChange={handleUploadChange}
                            beforeUpload={file => {
                                return true; 
                            }}
                            action="http://5.75.167.208:8080/vacancy/addapplicant  " // Your upload endpoint
                        >
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        label="Gender"
                        onChange={handleChange}
                        name="sex"
                        rules={[{ required: true, message: 'Please select your gender!' }]}
                    >
                        <Select>
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="nationality"
                        onChange={handleChange}
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
                <Card size="small" title="Address Information"
                    style={{
                        maxWidth: 900,
                    }}

                >
                    <Row gutter={16}>
                        <Col span={15}>
                            <Form.Item
                                label="City/Region"
                                onChange={handleChange}
                                name="city"
                                rules={[{ required: true, message: 'Please enter your city/region!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={15}>
                            <Form.Item
                                label="Subcity/Zone"
                                onChange={handleChange}
                                name="subCity"
                                rules={[{ required: true, message: 'Please enter your subcity/zone!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                    </Row>

                    <Row gutter={16}>
                        <Col span={10}>
                            <Form.Item
                                label="Wereda"
                                onChange={handleChange}
                                name="wereda"
                                rules={[{ required: true, message: 'Please enter your wereda!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={10}>
                            <Form.Item
                                label="Kebele"
                                onChange={handleChange}
                                name="kebele"
                                rules={[{ required: true, message: 'Please enter your kebele!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>

                        <Col span={15}>
                            <Form.Item
                                label="House No"
                                onChange={handleChange}
                                name="houseNo"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Phone"
                                onChange={handleChange}
                                name="phone"
                                rules={[{ required: true, message: 'Please enter your phone number!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>

                        <Col span={15}>
                            <Form.Item
                                label="Alternate Ph"
                                onChange={handleChange}
                                name="otherPhone"
                                rules={[{ required: false }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={15}>
                            <Form.Item
                                name="email"
                                onChange={handleChange}
                                label="Email"
                                rules={[{ required: false }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
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