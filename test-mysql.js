import 'dotenv/config'
import mysql from 'mysql2/promise'

async function test() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    })

    const [rows] = await connection.query(
        'SELECT alumnos.No_Ficha AS result FROM alumnos ORDER BY alumnos.No_Ficha DESC LIMIT 1',
    )
    console.log('Resultado:', rows[0].result)
}

test().catch(console.error)
