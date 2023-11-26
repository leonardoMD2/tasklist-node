import express from 'express'
import { mainLayer, createTask } from '../controllers/taskController.js'

const routes = express.Router()

routes.get('/', mainLayer)
routes.get('/create', createTask)

export default routes