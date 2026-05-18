import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'futanta_club',
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
