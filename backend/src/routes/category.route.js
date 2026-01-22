import express from 'express'
import { createCategory, deleteCategoryByid, getCategories, getCategoryByid, updatecategoryByid } from '../controllers/category.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'



const router = express.Router()

router.get('/', getCategories)
router.post('/', authMiddleware,  createCategory)
router.get('/:id', getCategoryByid)
router.put('/:id',authMiddleware,  updatecategoryByid)
router.delete('/:id',authMiddleware,  deleteCategoryByid)



export default router