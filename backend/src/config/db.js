import mysql from "mysql2/promise";
import "dotenv/config";

let db;

try {
  db = await mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  await db.getConnection();
  console.log(
    `connexion a la base de données ${process.env.DB_NAME} est réussie`,
  );
} catch (error) {
  console.error(
    `Erreur lors de la connexon a la base de donnée `,
    error.message,
  );
  process.exit(1);
}

export { db };
