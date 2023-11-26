import express from 'express'
import mainRoutes from './routes/mainRoute.js'


const app = express()
app.use(express.urlencoded({extended: true}))
//configuramos el view engine
app.set('view engine','pug')
//indicamos la carpeta en la que se encontrarán las view
app.set('views','./views')

//Carpeta pública
app.use(express.static('public'))

app.use('/', mainRoutes)


const port = 4000;
app.listen(port , ()=>{
    console.log(`Server corriendo puerto: ${port}`)
})
