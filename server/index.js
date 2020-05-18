const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const routerAdmin = require('./routes/admin/index')


app.use(require('cors')())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// require('./routes/admin/index')(app)

app.use('/admin/api',routerAdmin)


app.listen(3000,()=>{
    console.log("http://localhost:3000","is running")
})

