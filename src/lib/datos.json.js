import 'dotenv/config'
import pool from './db.js'

export async function get() {
    const [rows] = await pool.query('SELECT * FROM alumnos')
    return {
        body: JSON.stringify(rows || []),
    }
}
