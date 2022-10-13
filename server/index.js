const express = require('express')
const cors = require('cors')
const connection = require('./database/dbconnection')
const taskRoutes = require('./routes/tasks')
require('dotenv').config()
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1/tasks', taskRoutes)
const PORT = process.env.PORT || 8080
const MONGO_URI = process.env.MONGO_URI

const start = async() => {
    try {
        await connection(MONGO_URI)
        app.listen(PORT, () => { console.log(`Server running at http://localhost:${ PORT }`) })
    } catch (error) {
        console.log(`Error: ${ error }`)
    }
}

app.get('/', (req, res)=>{
    res.status(200).json('Home page requested')
})

app.all('*', (req, res)=>{
    res.status(401).json('Bad request!')
})

start()