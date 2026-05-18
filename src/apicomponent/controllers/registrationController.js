// File: apicomponent/controllers/registrationController.js
import bcrypt from 'bcrypt';
import { addUser, updateUser, getUsers, deleteUser } from '../services/registrationService';

export const getUsersController = async (req) => {
    try {
        const users = await getUsers();
        return new Response(JSON.stringify(users), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error in getUsersController:', error);
        return new Response(
            JSON.stringify({ message: 'Internal Server Error', error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};

export const addUserController = async (req) => {
    try {
        // Now req.body is guaranteed to be an object (because route.js built fakeReq)
        const {
            name,
            email,
            category,
            designation,
            occupation,
            phone,
            blood_group,
            birthdate,
            password,
            present_address,
            photo_path,
        } = req.body;


        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const userToInsert = {
            name,
            email,
            category,
            designation: designation || null,
            occupation: occupation || null,
            phone,
            blood_group,
            birthdate: birthdate || null,
            password: hashedPassword,
            present_address,
            photo_path: photo_path || null, // e.g. "/static/images/profile/…"
        };

        const result = await addUser(userToInsert);
        return new Response(
            JSON.stringify({ message: 'User registered successfully', result }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error in addUserController:', error);
        return new Response(
            JSON.stringify({ message: 'Internal Server Error', error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};

export const updateUserController = async (req) => {
    try {
        const {
            id,
            name,
            email,
            category,
            designation,
            occupation,
            phone,
            blood_group,
            birthdate,
            password,
            present_address,
            photo_path,
        } = req.body;

        let hashedPassword = null;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        }

        const userToUpdate = {
            id: Number(id),
            name: name !== undefined ? name : undefined,
            email: email !== undefined ? email : undefined,
            category: category !== undefined ? category : undefined,
            designation: designation !== undefined ? designation : undefined,
            occupation: occupation !== undefined ? occupation : undefined,
            phone: phone !== undefined ? phone : undefined,
            blood_group: blood_group !== undefined ? blood_group : undefined,
            birthdate: birthdate !== undefined ? birthdate : undefined,
            password: hashedPassword,
            present_address: present_address !== undefined ? present_address : undefined,
            photo_path: photo_path !== undefined ? photo_path : undefined,
        };

        const result = await updateUser(userToUpdate);
        return new Response(
            JSON.stringify({ message: 'User updated successfully', result }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error in updateUserController:', error);
        return new Response(
            JSON.stringify({ message: 'Internal Server Error', error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};

export const deleteUserController = async (req) => {
    try {
        const { id } = req.body; // route.js will build fakeReq.body = { id: ... }
        const result = await deleteUser(Number(id));
        return new Response(
            JSON.stringify({ message: 'User deleted successfully', result }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error in deleteUserController:', error);
        return new Response(
            JSON.stringify({ message: 'Internal Server Error', error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};
