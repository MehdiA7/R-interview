require('dotenv').config(); // Load environment variables

const mariadb = require('mariadb');
import { RegisterBody } from "../lib/connectionType";


const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3306,
    connectionLimit: 10,
    connectTimeout: 30000,
    acquireTimeout: 30000,
    trace: true 
});

class dbInteract {
    async aQuery(query: string, params?: any[]) {
        let connection;
        try {
            connection = await pool.getConnection();
            const data = await connection.query(query, params);
            return data;
        } catch (err) {
            throw err;
        } finally {
            if (connection) connection.release();
        };
    };

    async createUser(body: RegisterBody) {
        return await this.aQuery(
            "INSERT INTO users (type ,firstname, country, email, industry, phone, password, policy) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [body.type, body.firstname, body.country, body.email, body.industry, body.phone, body.password, body.policy]
        );
    };

    async emailExist(email: string) {
        return await this.aQuery(
            "SELECT email FROM users WHERE email = ?",
            [email]
        );
    };

    async loginCredential(email: string) {
        return await this.aQuery(
            "SELECT id, firstname, email, password FROM users WHERE email = ?",
            [email]
        );
    };
};

// REQUIRED
// CREATE TABLE users (
//     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
//     type varchar(30),
//     firstname varchar(255),
//     country varchar(50),
//     email varchar(255),
//     industry varchar(255),
//     phone varchar(255),
//     password varchar(255),
//     policy BOOLEAN
// )

module.exports = dbInteract;
