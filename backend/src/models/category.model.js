import { db } from "../config/db.js";

/// recuperation de toutes les categories

export const getAllCategories = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM categories");

    return rows;
  } catch (error) {
    console.error(
      "erreur lors de la récuperation des categories ",
      error.message,
    );
    throw error;
  }
};

// créer une categorie

export const create = async (name) => {
  try {
    await db.query("INSERT INTO categories (name) VALUES (?)", [name]);
  } catch (error) {
    console.error("erreur lors de la creation des categories ", error.message);
    throw error;
  }
};

//récuperer une seule categorie par rapport a son is

export const getCategoryById = async (id) => {
  try {


    const [rows] =  await db.query('SELECT * FROM categories WHERE id = ?', [id])

    return rows[0]
  } catch (error) {

    console.error("erreur lors de la creation des categories ", error.message);
    throw error;
  }
};

// Update une catgorie

export const updateCategoryById = async (id, name) => {

    try {

        const [result] = await db.query('UPDATE categories SET name = ? WHERE id = ?' , [name, id]) 

        return result.affectRows;
        
    } catch (error) {
           console.error("erreur lors de la mise a jou des categories ", error.message);
    throw error; 
    }
}

// Supprimer une category 

export const deleteById = async(id) => {
    try {
        const [result] = await db.query('DELETE FROM categories WHERE id = ?' , [id]) 
       return result.affectRows;
    } catch (error) {
                   console.error("erreur lors de la mise a jou des categories ", error.message);
    throw error; 
    }
}