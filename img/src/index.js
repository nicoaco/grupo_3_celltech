const express= require ('express')
const app= express()
const path = require ('path')
// const router = express.router()
// app.get('/', (req,res) =>res.send("hola mundo") )
app.listen(3000,() =>console.log("http://localhost:3000"))
app.use(express.static(path.resolve(__dirname,"../public")))

app.get ("/",(req,res)=>res.sendFile(path.resolve(__dirname,"./views","index.html")))




