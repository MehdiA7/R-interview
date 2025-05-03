import dotenv from "dotenv";
import mariadb from "mariadb";
dotenv.config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 5,
});

class dbInteract {
    async aQuery(query: string) {
        let connection;
        try {
            connection = await pool.getConnection();
            const data = await connection.query(query);
            return data;
        } catch (err) {
            throw err;
        } finally {
            if (connection) connection.release();
        }
    }

    async getAllButNoPass() {
        return await this.aQuery(
            `SELECT id, username, team, admin, subscription_date, team_id FROM users`
        );
    }
    
};

// REQUIRED
// CREATE TABLE users (
//     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
//     firstname varchar(255),
//     country varchar(50),
//     email varchar(255),
//     industry varchar(255),
//     phone varchar(255),
//     password varchar(255),
//     policy BOOLEAN
// );

module.exports = dbInteract;
