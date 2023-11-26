import express from 'express'
import { mainLayer, createTaskGET, createTaskPOST, modifyTaskGET } from '../controllers/taskController.js'

const routes = express.Router()

routes.get('/', mainLayer)
routes.get('/create', createTaskGET)
routes.post('/create', createTaskPOST)
routes.get('/modifytask/:id', modifyTaskGET)

export default routes