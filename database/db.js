import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database-tasks.sqlite'
})

try {
    await sequelize.authenticate();
    console.log('conectado a la db')
} catch (error) {
    console.log('no se pudo conectar ', error)
}

//creación de tabla
const Task = sequelize.define('tasks',{
    descripcion:{
        type:Sequelize.STRING
    },
    hecha:{
        type:Sequelize.BOOLEAN
    }},{
        timestamps: false
    }
);

//creación de la tabla
Task.sync()

export{
    Task
}