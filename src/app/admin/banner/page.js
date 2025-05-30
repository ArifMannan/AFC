"use client"
import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Form, Input, Modal, Popconfirm, Space, Table, Tag } from 'antd';
import apiClient from '../../../lib/axios';
// import SubmitButton from '../../component/utility/SubmitButton'
import ImageUpload from '@/app/component/imageUpload/ImageUpload';
import SubmitButton from '@/app/component/utility/SubmitButton';
const AdminBanner = () => {
    const [form] = Form.useForm();
    const [bannerData, setBannerData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalLoading, setModalLoading] = useState(false);
    const [open, setOpen] = useState(false);



    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await apiClient.get('/banner');
                setBannerData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);
    // hande delete function
    const handleDelete = (key) => {
        const newData = bannerData?.filter((item) => item.key !== key);
        setBannerData(newData);
    };

    const items = [
        {
            key: '1',
            label: 'Active',
        },
        {
            key: '2',
            label: 'Inactive',
        },
    ];

    const columns = [
        {
            title: 'Seq No',
            dataIndex: 'seq_id',
            key: 'seq_id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Subtitle',
            dataIndex: 'sub_title',
            key: 'sub_title',
        },

        {
            title: 'Link',
            dataIndex: 'link',
            key: 'link',
        },
        {
            title: 'Status',
            key: 'status',
            render: (_, record) => (
                <Space size="middle">
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a >
                            <Tag color={record.status === 1 ? "green" : "volcano"}>
                                {record.status === 1 ? "Active" : "Inactive"} <DownOutlined />
                            </Tag>

                        </a>
                    </Dropdown>

                </Space>
            ),
        },
        {
            title: 'Photo',
            dataIndex: 'path',
            key: 'path',
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            render: (_, record) =>
                bannerData?.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>

                        <a > <Tag color="volcano">
                            Delete
                        </Tag></a>
                    </Popconfirm>
                ) : null,
        }
    ];

    // post banner start

    const showModal = () => {
        setOpen(true);
    };
    const handleImageChange = (file) => {
        console.log('hitting')
        form.setFieldsValue({ avatar: file });
    };

    const handleOk = (values) => {
        setModalLoading(true);
        console.log('Form values:', values);
        // Add your form submission logic here
        setTimeout(() => {
            setModalLoading(false);
            setOpen(false);
        }, 1000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    // end


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='page-wrapper'>
            <h3 className='page-title text-center'> Banner</h3>
            <ul className="breadcrumb"><li className="breadcrumb-item">Admin</li><li className="breadcrumb-item active">Banner</li></ul>
            <div>
                <Button type="primary" className='mb-3' onClick={showModal}>
                    Add a Banner
                </Button>
                <Modal
                    open={open}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <h6 className='text-center mb-3'>Add Banner</h6>
                    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
                        <Form.Item
                            name="seq_no"
                            label="Seq No"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="title"
                            label="Title"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="subtitle"
                            label="Subtitle"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="link"
                            label="Link"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="avatar" label="Upload Avatar">
                            <ImageUpload onChange={handleImageChange} />
                        </Form.Item>
                        <Form.Item className='mt-3'>
                            <Space>
                                <SubmitButton form={form} loading={modalLoading} handleSubmit={handleOk}>
                                    Submit
                                </SubmitButton>
                                <Button htmlType="reset">Reset</Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
            <div>

                <Table bordered columns={columns} dataSource={bannerData} />
            </div>

        </div>
    );
};

export default AdminBanner;