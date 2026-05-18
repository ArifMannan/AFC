// File: app/api/registration/route.js

import { addUserController, updateUserController, getUsersController, deleteUserController }
    from '../../../apicomponent/controllers/registrationController';
import { saveProfilePhoto } from '../../../lib/upload';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// 4) GET handler: (returns all users)
export async function GET(request) {
    return getUsersController(request);
}

// 5) POST handler: parse multipart/form-data via request.formData()
export async function POST(request) {
    try {
        // 5.1) Parse the incoming form data:
        const formData = await request.formData();

        // 5.2) Extract text fields:
        const name = formData.get('name') || '';
        const email = formData.get('email') || '';
        const category = formData.get('category') || '';
        const designation = formData.get('designation') || '';
        const occupation = formData.get('occupation') || '';
        const phone = formData.get('phone') || '';
        const blood_group = formData.get('blood_group') || '';
        const birthdate = formData.get('birthdate') || ''; // e.g. "2025-06-06T00:00:00.000Z" or ""
        const password = formData.get('password') || '';
        const present_address = formData.get('present_address') || '';

        // 5.3) Handle the “photo” file (if any):
        let photo_path = null;
        const photoFile = formData.get('photo');
        if (photoFile && photoFile.size > 0) {
            // Name it something unique:
            const filename = `${Date.now()}-${photoFile.name}`;
            photo_path = await saveProfilePhoto(photoFile, filename);
            // photo_path now is a string like "/static/images/profile/1623456789012-myavatar.jpg"
        }

        // 5.4) Build an object that mimics `req.body` for the controller
        //      (i.e. all fields as strings, plus photo_path if we saved one)
        const fakeReq = {
            body: {
                name,
                email,
                category,
                designation,
                occupation,
                phone,
                blood_group,
                birthdate: birthdate || null,
                password,
                present_address,
                photo_path, // or null if no file
            },
        };

        // 5.5) Delegate to your controller, passing fakeReq so it can do:
        //      const { name, email, password, … } = req.body;
        return addUserController(fakeReq);
    } catch (err) {
        console.error('Error in POST /api/registration:', err);
        return new Response(
            JSON.stringify({ message: 'Internal Server Error', error: err.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

// 6) PUT handler: similar to POST, but update instead of add
export async function PUT(request) {
    try {
        const formData = await request.formData();

        // Extract the “id” (string) and other optional fields
        const id = formData.get('id') || '';
        const name = formData.get('name') || undefined;
        const email = formData.get('email') || undefined;
        const category = formData.get('category') || undefined;
        const designation = formData.get('designation') || undefined;
        const occupation = formData.get('occupation') || undefined;
        const phone = formData.get('phone') || undefined;
        const blood_group = formData.get('blood_group') || undefined;
        const birthdate = formData.get('birthdate') || undefined;
        const password = formData.get('password') || null;  // if no new password, leave as null
        const present_address = formData.get('present_address') || undefined;

        // Handle photo (if the user uploaded a new one)
        let photo_path = undefined;
        const photoFile = formData.get('photo');
        if (photoFile && photoFile.size > 0) {
            const filename = `${Date.now()}-${photoFile.name}`;
            photo_path = await saveProfilePhoto(photoFile, filename);
        }

        // Build a fakeReq.body that only contains fields the client provided.
        // If a field is literally missing from the form, we set it to `undefined`
        // so the service layer's dynamic-update logic can skip it.
        const fakeReq = {
            body: {
                id: Number(id),
                name,
                email,
                category,
                designation,
                occupation,
                phone,
                blood_group,
                birthdate,
                password,       // either a string (if changed) or null if no update
                present_address,
                photo_path,     // either a string (new path) or undefined if no new file
            },
        };

        return updateUserController(fakeReq);
    } catch (err) {
        console.error('Error in PUT /api/registration:', err);
        return new Response(
            JSON.stringify({ message: 'Internal Server Error', error: err.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

// 7) DELETE handler: Next’s `request.json()` works fine here
export async function DELETE(request) {
    // We expect a JSON body with { "id": 123 }
    try {
        const payload = await request.json();
        const fakeReq = { body: { id: Number(payload.id) } };
        return deleteUserController(fakeReq);
    } catch (err) {
        console.error('Error in DELETE /api/registration:', err);
        return new Response(
            JSON.stringify({ message: 'Internal Server Error', error: err.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
