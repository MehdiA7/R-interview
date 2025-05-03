import dotenv from "dotenv";
import mariadb from "mariadb";
import { RegisterBody } from "../lib/type";
dotenv.config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 5,
});

class dbInteract {
    async aQuery(query: string, p0?: (string | boolean)[]) {
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

    async createUser(body: RegisterBody) {
        return await this.aQuery(
            `INSERT INTO users (firstname, country, email, industry, phone, password, policy) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [body.firstname, body.country, body.email, body.industry, body.phone, body.password, body.policy]
        );
    }
}

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
