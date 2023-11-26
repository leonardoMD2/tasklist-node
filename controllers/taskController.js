import { Task } from "../database/db.js"

const mainLayer = async (req,res) => {
    const task_list = await Task.findAll()
    res.render('loadTasks',{tasks: task_list})
}

const createTaskPOST = async (req,res) => {
    console.log("Cargando datos")
    if(req.body.descripcion != ""){
        const new_task = await Task.create({descripcion: req.body.descripcion, hecha: false})
        res.redirect('/')
    }else{
        res.send('ERROR')
    }
}

const createTaskGET = (req,res) => {
    res.render('createTask')
}

export {
    mainLayer,
    createTaskGET,
    createTaskPOST

}