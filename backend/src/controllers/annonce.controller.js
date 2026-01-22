import { createAnnonce, getAllAnnonces } from "../models/annonce.model.js";
import { annonceSchama } from "../validations/annonce.validation.js";



// récuperer toute les annonces 

export const getAnnonces = async (req, res) => {
    try {

        const annonces =  await getAllAnnonces();
        res.json(annonces)
        
    } catch (error) {
         console.error(
      "Erreur lors de la recuperation des annonces dans model ",
      error.message,
    );
    res.status(500).json({
      message: "erreur serveur lors de la recuperation des annonces ",
    });
    }
}

// creation d'annonce

export const create =  async (req, res) => {
  try {

    const {title, price, city, category_id} = req.body 
    const image = req.file ? req.file.filename :  null
    const user_id = req.user.id

// validation 

    const {error} = annonceSchama.validate({title, price, city, category_id})

    if (error) {
      return res.status(400).json({message: error.details[0].message})
    }

    await createAnnonce({title, price , city, image ,user_id, category_id })

    res.status(201).json({message: 'annoncé créé avec succes'})
    
  } catch (error) {
             console.error(
      "Erreur lors de la creation des annonces dans model ",
      error.message,
    );
    res.status(500).json({
      message: "erreur serveur lors de la creation des annonces ",
    });
  }
}