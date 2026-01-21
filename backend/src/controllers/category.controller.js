import { getAllCategories, create } from "../models/category.model.js";
import { categorySchema } from "../validations/categorie.validation.js";

// recuperer toute

export const getCategories = async (req, res) => {
  try {
    const categories = await getAllCategories();

    res.json(categories);
  } catch (error) {
    console.error(
      "Erreur lors de la recuperation des categoies dans model ",
      error.message,
    );
    res.status(500).json({
      message: "erreur serveur lors de la recuperation des categoires ",
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ message: "Le npom de la categorie est requis " });
    }

    const { error } = categorySchema.validate({ name });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    await create(name);
    res.status(201).json({ message: "Categorie créé " });
  } catch (error) {
    console.error(
      "Erreur lors de la recuperation des categoies dans model ",
      error.message,
    );
    res.status(500).json({
      message: "erreur serveur lors de la creation des categoires ",
    });
  }
};
