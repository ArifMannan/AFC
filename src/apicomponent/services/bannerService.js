import { executeQuery } from '../../lib/db';

export const getBanners = async () => {
    const query = 'SELECT * FROM banner';
    return executeQuery(query);
};

export const addBanner = async (title, image) => {
    const query = 'INSERT INTO banners (title, image) VALUES (?, ?)';
    return executeQuery(query, [title, image]);
};

export const updateBanner = async (id, title, image) => {
    const query = 'UPDATE banners SET title = ?, image = ? WHERE id = ?';
    return executeQuery(query, [title, image, id]);
};

export const deleteBanner = async (id) => {
    const query = 'DELETE FROM banners WHERE id = ?';
    return executeQuery(query, [id]);
};
