import { Task } from "../database/db.js"

const mainLayer = (req,res) => {
    res.render('index')
}

const createTask = async (req,res) => {
   
    res.json({new_task})
}

export {
    mainLayer,
    createTask
}