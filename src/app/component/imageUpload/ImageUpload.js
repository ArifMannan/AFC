import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const ImageUpload = ({ onChange }) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
                onChange(info.file.originFileObj); // Pass the file to the parent component
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader w-100"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {imageUrl ? (
                <img className='w-100 h-100' src={imageUrl} alt="avatar" />
            ) : (
                uploadButton
            )}
        </Upload>
    );
};

export default ImageUpload;
