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

const modifyTaskGET = async (req,res) => {

    const param_id = req.params.id
    if(param_id){
        await Task.destroy({where:{id:param_id}})
        res.redirect('/')
    }else{
        res.send('Error con la id')
    }
    

}

export {
    mainLayer,
    createTaskGET,
    createTaskPOST,
    modifyTaskGET

}