// app/api/upload/route.js
import multer from 'multer';
import nextConnect from 'next-connect';
import path from 'path';
import fs from 'fs';

// Create the upload directory if it doesn't exist
const uploadDir = path.join(process.cwd(), '/public/uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

// Middleware
const handler = nextConnect();

handler.use(upload.single('file'));

handler.post((req, res) => {
    res.status(200).json({ message: 'Image uploaded successfully', filePath: `/uploads/${req.file.filename}` });
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
