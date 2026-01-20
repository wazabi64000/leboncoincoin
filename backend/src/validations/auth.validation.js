import Joi from 'joi'

export const registrationSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(40).required(),
 

}) 

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(40).required()
}) 
