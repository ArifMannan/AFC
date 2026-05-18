import path from 'path';
import fs from 'fs';

const isVercel = Boolean(process.env.VERCEL);
const hasCloudinary = Boolean(process.env.CLOUDINARY_CLOUD_NAME);

/**
 * On Vercel the filesystem is read-only except /tmp, and nothing persists.
 * Local disk upload works in dev; production uploads need Cloudinary (configure later).
 */
export function canPersistUploads() {
    return !isVercel || hasCloudinary;
}

export async function saveProfilePhoto(file, filename) {
    if (!file || file.size === 0) {
        return null;
    }

    if (isVercel && !hasCloudinary) {
        console.warn(
            'Profile photo not saved: set CLOUDINARY_* env vars for uploads on Vercel.'
        );
        return null;
    }

    const uploadDir = path.join(process.cwd(), 'public', 'static', 'images', 'profile');
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fullPath = path.join(uploadDir, filename);
    fs.writeFileSync(fullPath, buffer);
    return `/static/images/profile/${filename}`;
}
