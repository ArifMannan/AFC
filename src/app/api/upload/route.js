// app/api/upload/route.js
import { NextResponse } from 'next/server';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Configure Multer storage
const uploadDir = path.join(process.cwd(), 'public/uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// Helper to handle Multer in Next.js App Router
const multerMiddleware = upload.single('file');

export const dynamic = 'force-dynamic'; // Required for file uploads
export const runtime = 'nodejs'; // Required for Multer (doesn't work on Edge)

export async function POST(request) {
    return new Promise((resolve, reject) => {
        multerMiddleware(request, {}, async (err) => {
            if (err) {
                return reject(NextResponse.json(
                    { error: 'File upload failed' },
                    { status: 500 }
                ));
            }

            if (!request.file) {
                return reject(NextResponse.json(
                    { error: 'No file uploaded' },
                    { status: 400 }
                ));
            }

            resolve(NextResponse.json({
                message: 'Image uploaded successfully',
                filePath: `/uploads/${request.file.filename}`
            }));
        });
    });
}