import express from 'express'
import { register, login } from '../controllers/auth.controller.js'
import { uplaod } from '../middlewares/upload.middleware.js'


const router = express.Router()

router.post('/register' , uplaod.single('avatar'), register )
router.post('/login', login)
 

export default router;