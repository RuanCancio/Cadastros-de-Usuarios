import mysql from "mysql2"

export const db = mysql.createPool({
    host: "localhost",
    user : "root",
    password : "r80366452@",
    database: "cadastrodeusuarios"
}
)