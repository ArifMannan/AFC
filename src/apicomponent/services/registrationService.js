// apicomponent/services/registrationService.js
import { executeQuery } from '../../lib/db';

/**
 * Fetch all users. We’ll also include photo_path in the SELECT.
 */
export const getUsers = async () => {
    const query = `
    SELECT
      id,
      name,
      email,
      category,
      designation,
      occupation,
      phone,
      blood_group,
      DATE_FORMAT(birthdate, '%Y-%m-%d') AS birthdate,
      present_address,
      photo_path
    FROM users
  `;
    return executeQuery(query);
};

/**
 * Add a new user record. Now `user.photo_path` contains the relative URL (or NULL).
 */
export const addUser = async (user) => {
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
    } = user;

    const query = `
    INSERT INTO users
      (name, email, category, designation, occupation, phone, blood_group, birthdate, password, present_address, photo_path)
    VALUES
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
    const params = [
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
        photo_path, // e.g. "/static/images/profile/1623456-foo.jpg"
    ];

    return executeQuery(query, params);
};

/**
 * Update an existing user. If `user.photo_path` is defined, update it;
 * otherwise leave it alone.
 */
export const updateUser = async (user) => {
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
    } = user;

    const fields = [];
    const params = [];

    if (name !== undefined) {
        fields.push('name = ?');
        params.push(name);
    }
    if (email !== undefined) {
        fields.push('email = ?');
        params.push(email);
    }
    if (category !== undefined) {
        fields.push('category = ?');
        params.push(category);
    }
    if (designation !== undefined) {
        fields.push('designation = ?');
        params.push(designation);
    }
    if (occupation !== undefined) {
        fields.push('occupation = ?');
        params.push(occupation);
    }
    if (phone !== undefined) {
        fields.push('phone = ?');
        params.push(phone);
    }
    if (blood_group !== undefined) {
        fields.push('blood_group = ?');
        params.push(blood_group);
    }
    if (birthdate !== undefined) {
        fields.push('birthdate = ?');
        params.push(birthdate);
    }
    if (password !== null) {
        fields.push('password = ?');
        params.push(password);
    }
    if (present_address !== undefined) {
        fields.push('present_address = ?');
        params.push(present_address);
    }
    if (photo_path !== undefined) {
        // Only update photo_path if a new file was provided
        fields.push('photo_path = ?');
        params.push(photo_path);
    }

    if (fields.length === 0) {
        throw new Error('No fields provided to update.');
    }

    const query = `
    UPDATE users
    SET ${fields.join(', ')}
    WHERE id = ?
  `;
    params.push(id);

    return executeQuery(query, params);
};

/**
 * Delete a user by ID
 */
export const deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE id = ?';
    return executeQuery(query, [id]);
};
