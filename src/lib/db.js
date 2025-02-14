
import mysql from 'mysql2/promise'

const pool = mysql.createPool({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true, 
    },
})

// Prueba la conexión
pool.getConnection()
    .then(conn => {
        console.log('¡Conexión exitosa a MySQL!')
        conn.release()
    })
    .catch(err => {
        console.error('Error de conexión a MySQL:', err)
    })

export default pool
