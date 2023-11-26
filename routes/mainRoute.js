import express from 'express'
import { mainLayer, createTaskGET, createTaskPOST } from '../controllers/taskController.js'

const routes = express.Router()

routes.get('/', mainLayer)
routes.get('/create', createTaskGET)
routes.post('/create', createTaskPOST)

export default routes