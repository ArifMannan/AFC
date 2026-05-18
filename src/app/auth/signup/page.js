'use client';
import { useState, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import moment from 'moment';
import Cropper from 'react-easy-crop';
import axios from 'axios';
import getCroppedImg from '@/app/component/CropedImage/getCroppedImg';
import Head from 'next/head';
import { useAsyncOperation, networkErrorHandler, ValidationError } from '@/app/utils/errorHandler';

const RegistrationPage = () => {
    // Initialize useMessage()
    const [messageApi, contextHolder] = message.useMessage();
    const { execute, loading, error, clearError } = useAsyncOperation();

    const showSuccess = (text) => {
        messageApi.open({ type: 'success', content: text });
    };
    const showError = (text) => {
        messageApi.open({ type: 'error', content: text });
    };
    const showWarning = (text) => {
        messageApi.open({ type: 'warning', content: text });
    };

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
        setValue,
        reset,
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            category: '',
            designation: '',
            occupation: '',
            phone: '',
            blood_group: '',
            birthdate: null,
            password: '',
            present_address: '',
        },
    });

    const [imageSrc, setImageSrc] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [showCropper, setShowCropper] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    const selectedCategory = watch('category');

    const onCropComplete = useCallback((croppedArea, pixels) => {
        setCroppedAreaPixels(pixels);
    }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file.type.startsWith('image/')) {
            showError('Only image files are allowed.');
            return;
        }
        if (file.size / 1024 / 1024 > 2) {
            showError('Image must be smaller than 2MB.');
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImageSrc(reader.result);
            setShowCropper(true);
        };
        reader.readAsDataURL(file);
    };

    const saveCroppedImage = useCallback(async () => {
        try {
            const cropped = await getCroppedImg(imageSrc, croppedAreaPixels);
            setPreviewImage(cropped);
            setValue('photo_base64', cropped);
            setShowCropper(false);
        } catch {
            showError('Error cropping image.');
        }
    }, [imageSrc, croppedAreaPixels, setValue]);

    async function dataURLtoFile(dataurl, filename) {
        if (dataurl.startsWith('blob:')) {
            const response = await fetch(dataurl);
            const blob = await response.blob();
            return new File([blob], filename, { type: blob.type });
        }
        const arr = dataurl.split(',');
        if (arr.length < 2) throw new Error('Invalid data URL.');
        const mimeMatch = arr[0].match(/:(.*?);/);
        if (!mimeMatch) throw new Error('Cannot parse MIME type.');
        const mime = mimeMatch[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }

    const onSubmit = async (data) => {
        try {
            // Clear any previous errors
            clearError();

            // Validate required fields
            if (!data.name?.trim()) {
                throw new ValidationError('Name is required');
            }

            const birthdateISO = data.birthdate ? data.birthdate.toISOString() : null;

            const formData = new FormData();
            formData.append('name', data.name.trim());
            formData.append('email', data.email || '');
            formData.append('category', data.category || '');
            formData.append('designation', data.designation || '');
            formData.append('occupation', data.occupation || '');
            formData.append('phone', data.phone || '');
            formData.append('blood_group', data.blood_group || '');
            formData.append('birthdate', birthdateISO || '');
            formData.append('password', data.password || '');
            formData.append('present_address', data.present_address || '');

            if (previewImage) {
                try {
                    const fileObj = await dataURLtoFile(
                        previewImage,
                        `profile_${Date.now()}.jpg`
                    );
                    formData.append('photo', fileObj);
                } catch (err) {
                    console.error('Error converting previewImage:', err);
                    throw new ValidationError('Could not process the profile photo. Please try again.');
                }
            }

            const response = await execute(async () => {
                return await axios.post('/api/registration', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    timeout: 30000, // 30 second timeout
                });
            });

            if (response.status === 201) {
                showSuccess('Registration successful! Welcome to Futanta Club.');
                reset();
                setPreviewImage(null);
                setImageSrc(null);
                setCrop({ x: 0, y: 0 });
                setZoom(1);
                setCroppedAreaPixels(null);
            } else {
                throw new Error('Registration failed. Please try again.');
            }
        } catch (err) {
            console.error('Registration error:', err);

            // Handle different types of errors
            if (err instanceof ValidationError) {
                showError(err.message);
            } else if (err.response?.data?.error) {
                // Server returned specific error
                showError(err.response.data.error);
            } else if (err.code === 'NETWORK_ERROR' || err.code === 'NO_RESPONSE') {
                showError('Network error. Please check your connection and try again.');
            } else if (err.code === 'TIMEOUT') {
                showError('Request timed out. Please try again.');
            } else if (err.response?.status === 409) {
                showError('An account with this email already exists.');
            } else if (err.response?.status === 422) {
                showError('Please check your information and try again.');
            } else if (err.response?.status >= 500) {
                showError('Server error. Please try again later.');
            } else {
                showError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <>
            <Head>
                <title>Registration</title>
            </Head>
            <div className="container py-4">
                {contextHolder}

                <div
                    className="card shadow-lg animate__animated animate__fadeInUp"
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <div className="card-header bg-success text-white">
                        <h3 className="mb-0">Futanta Club Registration</h3>
                        <small className="text-light">
                            Join as Member / Student / Examiner / Teacher / Other
                        </small>
                    </div>
                    <div className="card-body">
                        {/* Profile Photo Upload / Cropper */}
                        <div className="d-flex flex-column flex-md-row align-items-md-center mb-3">
                            {previewImage && (
                                <div className="me-md-3 mb-3 mb-md-0">
                                    <img
                                        src={previewImage}
                                        alt="Profile Preview"
                                        className="rounded-circle border border-success"
                                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                    />
                                </div>
                            )}
                            <div className="flex-grow-1">
                                <label className="form-label text-dark">Profile Photo</label>
                                <div
                                    className="border border-2 border-dashed border-secondary rounded p-3 text-center"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => document.getElementById('photo-upload').click()}
                                >
                                    <input
                                        id="photo-upload"
                                        type="file"
                                        accept="image/*"
                                        className="d-none"
                                        onChange={handleImageUpload}
                                    />
                                    <p className="mb-1 text-success">
                                        <InboxOutlined style={{ fontSize: '24px' }} />
                                    </p>
                                    <p className="mb-1 text-dark">Click to upload profile photo</p>
                                    <p className="text-muted small">JPG, PNG, SVG. Max 2MB.</p>
                                </div>
                            </div>
                        </div>

                        {showCropper && (
                            <div
                                className="modal show d-block"
                                style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Crop Profile Photo</h5>
                                        </div>
                                        <div className="modal-body">
                                            <div style={{ position: 'relative', height: '250px' }}>
                                                <Cropper
                                                    image={imageSrc}
                                                    crop={crop}
                                                    zoom={zoom}
                                                    aspect={1}
                                                    onCropChange={setCrop}
                                                    onZoomChange={setZoom}
                                                    onCropComplete={onCropComplete}
                                                    cropShape="round"
                                                />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                className="btn btn-secondary"
                                                onClick={() => setShowCropper(false)}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className="btn btn-success"
                                                onClick={saveCroppedImage}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Registration Form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row g-3">
                                {/* Name (required) */}
                                <div className="col-md-6">
                                    <label className="form-label text-dark">
                                        Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        {...register('name', { required: 'Name is required' })}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && (
                                        <div className="invalid-feedback">{errors.name.message}</div>
                                    )}
                                </div>

                                {/* Email (optional) */}
                                <div className="col-md-6">
                                    <label className="form-label text-dark">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        {...register('email', {
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'Enter a valid email',
                                            },
                                        })}
                                        placeholder="you@example.com"
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email.message}</div>
                                    )}
                                </div>

                                {/* Category (optional) */}
                                <div className="col-md-6">
                                    <label className="form-label text-dark">Category</label>
                                    <select
                                        className={`form-select ${errors.category ? 'is-invalid' : ''}`}
                                        {...register('category')}
                                    >
                                        <option value="">Select Category</option>
                                        <option value="AFC Member">AFC Member</option>
                                        <option value="Student">Student</option>
                                        <option value="Examiner">Examiner</option>
                                        <option value="Teacher">Teacher</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.category && (
                                        <div className="invalid-feedback">
                                            {errors.category.message}
                                        </div>
                                    )}
                                </div>

                                {/* Designation (only if AFC Member, optional) */}
                                {selectedCategory === 'AFC Member' && (
                                    <div className="col-md-6">
                                        <label className="form-label text-dark">Designation</label>
                                        <select
                                            className={`form-select ${errors.designation ? 'is-invalid' : ''
                                                }`}
                                            {...register('designation')}
                                        >
                                            <option value="">Select Designation</option>
                                            <option value="Advisor">Advisor</option>
                                            <option value="Chief Advisor">Chief Advisor</option>
                                            <option value="Board of Director">Board of Director</option>
                                            <option value="Executive Member">Executive Member</option>
                                            <option value="Ex-Executive Member">Ex-Executive Member</option>
                                            <option value="Senior Member">Senior Member</option>
                                            <option value="Member">Member</option>
                                            <option value="Junior Member">Junior Member</option>
                                            <option value="Exam Controller">Exam Controller</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.designation && (
                                            <div className="invalid-feedback">
                                                {errors.designation.message}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Occupation (optional) */}
                                <div className="col-md-6">
                                    <label className="form-label text-dark">Occupation</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register('occupation')}
                                        placeholder="e.g., Software Engineer"
                                    />
                                </div>

                                {/* Phone (optional) */}
                                <div className="col-md-6">
                                    <label className="form-label text-dark">Phone Number</label>
                                    <input
                                        type="tel"
                                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                        {...register('phone', {
                                            pattern: {
                                                value: /^\+?[0-9]{10,15}$/,
                                                message:
                                                    'Enter a valid phone number (10-15 digits, optional +)',
                                            },
                                        })}
                                        placeholder="+8801XXXXXXXXX"
                                    />
                                    {errors.phone && (
                                        <div className="invalid-feedback">{errors.phone.message}</div>
                                    )}
                                </div>

                                {/* Blood Group (optional) */}
                                <div className="col-md-6">
                                    <label className="form-label text-dark">Blood Group</label>
                                    <select
                                        className={`form-select ${errors.blood_group ? 'is-invalid' : ''}`}
                                        {...register('blood_group')}
                                    >
                                        <option value="">Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                    {errors.blood_group && (
                                        <div className="invalid-feedback">
                                            {errors.blood_group.message}
                                        </div>
                                    )}
                                </div>

                                {/* Birthdate (optional) */}
                                <div className="col-md-6">
                                    <label className="form-label text-dark">Birthdate</label>
                                    <Controller
                                        control={control}
                                        name="birthdate"
                                        render={({ field }) => (
                                            <DatePicker
                                                className={`form-control ${errors.birthdate ? 'is-invalid' : ''
                                                    }`}
                                                onChange={(date) => field.onChange(date)}
                                                value={field.value ? moment(field.value) : null}
                                                format="YYYY-MM-DD"
                                                style={{ width: '100%' }}
                                            />
                                        )}
                                    />
                                    {errors.birthdate && (
                                        <div className="invalid-feedback">
                                            {errors.birthdate.message}
                                        </div>
                                    )}
                                </div>

                                {/* Password (optional) */}
                                <div className="col-md-6">
                                    <label className="form-label text-dark">Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${errors.password ? 'is-invalid' : ''
                                            }`}
                                        {...register('password', {
                                            minLength: {
                                                value: 6,
                                                message:
                                                    'Password must be at least 6 characters',
                                            },
                                        })}
                                        placeholder="********"
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback">
                                            {errors.password.message}
                                        </div>
                                    )}
                                </div>

                                {/* Present Address (optional) */}
                                <div className="col-12">
                                    <label className="form-label text-dark">Present Address</label>
                                    <textarea
                                        rows="3"
                                        className={`form-control ${errors.present_address ? 'is-invalid' : ''
                                            }`}
                                        {...register('present_address')}
                                        placeholder="1234 Street Name, City, Country"
                                    />
                                    {errors.present_address && (
                                        <div className="invalid-feedback">
                                            {errors.present_address.message}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Error Display */}
                            {error && (
                                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded">
                                    <div className="d-flex align-items-center">
                                        <div className="text-red-600 me-2">⚠️</div>
                                        <div>
                                            <strong className="text-red-800">Error:</strong>
                                            <span className="text-red-600 ms-1">{error.message}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="mt-4 d-flex justify-content-between align-items-center">
                                <div className="text-muted small">
                                    Fields marked with <span className="text-danger">*</span> are required
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    disabled={loading}
                                    style={{
                                        backgroundColor: loading ? '#6c757d' : '#28a745',
                                        borderColor: loading ? '#6c757d' : '#28a745',
                                        minWidth: '120px',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!loading) {
                                            e.currentTarget.style.backgroundColor = '#218838';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!loading) {
                                            e.currentTarget.style.backgroundColor = '#28a745';
                                        }
                                    }}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Registering...
                                        </>
                                    ) : (
                                        'Register'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationPage;
