import express from "express";
import userController from '../controllers/userControllers'
import auth from '../controllers/authControllers'

const router = express.Router()

router.get('/tickets',auth.verify,userController.getTickets)

module.exports = router