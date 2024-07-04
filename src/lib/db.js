import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'futanta_club',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export const executeQuery = (queryString, params = []) => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await pool.getConnection();
            const [results] = await connection.execute(queryString, params);
            resolve(results);
            connection.release();
        } catch (err) {
            console.error('Error executing query:', err);
            reject(err);
        }
    });
};

export default pool;
