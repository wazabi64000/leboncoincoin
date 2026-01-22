import express from 'express'
import { create, getAnnonces } from '../controllers/annonce.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { upload } from '../middlewares/upload.middleware.js'
 


const router = express.Router()

router.get('/', getAnnonces)
router.post('/', authMiddleware,upload.array('image', 15), create)


export default router