import { db } from "../config/db.js";

/// recuperation de toutes les categories

export const getAllCategories = async () => {
  try {
    const [rows] = await  db.query("SELECT * FROM categories");

    return rows;
  } catch (error) {
    console.error(
      "erreur lors de la récuperation des categories ",
      error.message
    );
    throw error;
  }
};

// créer une categorie 

export const create = async (name) => {
    try {
        await db.query('INSERT INTO categories (name) VALUES (?)', [name])
 
    } catch (error) {
            console.error(
      "erreur lors de la creation des categories ",
      error.message,
    );
    throw error;
    }
}