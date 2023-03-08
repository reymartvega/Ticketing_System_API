import express from "express";
import adminController from '../controllers/adminControllers'
import auth from '../controllers/authControllers'

const router = express.Router()

router.get('/allTickets',auth.verify,adminController.getAllTickets)

module.exports = router