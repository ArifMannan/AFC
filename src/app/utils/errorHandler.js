// Error handling utilities for the application
import { useState, useEffect } from 'react';

export class AppError extends Error {
    constructor(message, statusCode = 500, code = 'INTERNAL_ERROR') {
        super(message);
        this.name = 'AppError';
        this.statusCode = statusCode;
        this.code = code;
        this.timestamp = new Date().toISOString();
    }
}

export class AuthError extends AppError {
    constructor(message = 'Authentication failed', statusCode = 401) {
        super(message, statusCode, 'AUTH_ERROR');
        this.name = 'AuthError';
    }
}

export class ValidationError extends AppError {
    constructor(message = 'Validation failed', statusCode = 400) {
        super(message, statusCode, 'VALIDATION_ERROR');
        this.name = 'ValidationError';
    }
}

export class PermissionError extends AppError {
    constructor(message = 'Permission denied', statusCode = 403) {
        super(message, statusCode, 'PERMISSION_ERROR');
        this.name = 'PermissionError';
    }
}

// Error handler for async operations
export const asyncErrorHandler = (fn) => {
    return async (...args) => {
        try {
            return await fn(...args);
        } catch (error) {
            console.error('Async operation error:', error);
            throw error;
        }
    };
};

// Error handler for React components
export const componentErrorHandler = (error, errorInfo) => {
    console.error('Component error:', error, errorInfo);

    // You can send error to error reporting service here
    // Example: Sentry.captureException(error, { extra: errorInfo });

    return {
        hasError: true,
        error: error.message || 'Something went wrong',
        errorInfo
    };
};

// Error handler for API routes
export const apiErrorHandler = (error, req, res) => {
    console.error('API error:', error);

    let statusCode = 500;
    let message = 'Internal server error';
    let code = 'INTERNAL_ERROR';

    if (error instanceof AppError) {
        statusCode = error.statusCode;
        message = error.message;
        code = error.code;
    } else if (error.name === 'ValidationError') {
        statusCode = 400;
        message = 'Validation failed';
        code = 'VALIDATION_ERROR';
    } else if (error.name === 'CastError') {
        statusCode = 400;
        message = 'Invalid data format';
        code = 'INVALID_FORMAT';
    } else if (error.code === 11000) {
        statusCode = 409;
        message = 'Duplicate entry';
        code = 'DUPLICATE_ENTRY';
    }

    return res.status(statusCode).json({
        success: false,
        error: {
            message,
            code,
            timestamp: new Date().toISOString(),
            ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
        }
    });
};

// Error handler for form validation
export const formErrorHandler = (errors) => {
    const formattedErrors = {};

    Object.keys(errors).forEach(key => {
        const error = errors[key];
        if (error && error.message) {
            formattedErrors[key] = error.message;
        }
    });

    return formattedErrors;
};

// Error handler for network requests
export const networkErrorHandler = (error) => {
    if (error.response) {
        // Server responded with error status
        const { status, data } = error.response;

        switch (status) {
            case 400:
                return new ValidationError(data?.message || 'Bad request');
            case 401:
                return new AuthError(data?.message || 'Unauthorized');
            case 403:
                return new PermissionError(data?.message || 'Forbidden');
            case 404:
                return new AppError(data?.message || 'Not found', 404, 'NOT_FOUND');
            case 409:
                return new AppError(data?.message || 'Conflict', 409, 'CONFLICT');
            case 422:
                return new ValidationError(data?.message || 'Validation failed');
            case 429:
                return new AppError(data?.message || 'Too many requests', 429, 'RATE_LIMIT');
            case 500:
                return new AppError(data?.message || 'Internal server error', 500, 'SERVER_ERROR');
            default:
                return new AppError(data?.message || 'Network error', status, 'NETWORK_ERROR');
        }
    } else if (error.request) {
        // Request was made but no response received
        return new AppError('No response from server', 0, 'NO_RESPONSE');
    } else {
        // Something else happened
        return new AppError(error.message || 'Network error', 0, 'NETWORK_ERROR');
    }
};

// Error boundary component
export const ErrorBoundary = ({ children, fallback }) => {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleError = (error, errorInfo) => {
            const errorData = componentErrorHandler(error, errorInfo);
            setError(errorData);
            setHasError(true);
        };

        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', (event) => {
            handleError(event.reason, { type: 'unhandledrejection' });
        });

        return () => {
            window.removeEventListener('error', handleError);
            window.removeEventListener('unhandledrejection', handleError);
        };
    }, []);

    if (hasError) {
        return fallback ? fallback(error) : (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center p-6 bg-red-50 border border-red-200 rounded-lg">
                    <h2 className="text-xl font-semibold text-red-800 mb-2">
                        Something went wrong
                    </h2>
                    <p className="text-red-600 mb-4">
                        {error?.error || 'An unexpected error occurred'}
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                    >
                        Reload Page
                    </button>
                </div>
            </div>
        );
    }

    return children;
};

// Hook for handling async operations with error handling
export const useAsyncOperation = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const execute = async (operation) => {
        try {
            setLoading(true);
            setError(null);
            const result = await operation();
            return result;
        } catch (err) {
            const handledError = networkErrorHandler(err);
            setError(handledError);
            throw handledError;
        } finally {
            setLoading(false);
        }
    };

    const clearError = () => setError(null);

    return { execute, loading, error, clearError };
}; 