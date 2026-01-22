import Joi from 'joi'

export const annonceSchama = Joi.object({
    title: Joi.string().min(3).required(),
    price : Joi.number().positive().precision(2).required(),
    city : Joi.string().required(),
    category_id : Joi.number().required()

}) 