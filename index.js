const express = require("express")
const bodyp = require("body-parser")
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/send", (req, res)=>{
    let mail = req.body.email
    let name = req.body.name
    console.log(req.body)
    res.send(`Nombre: ${name} \nEmail: ${mail}`)
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Listening on port 3000")
})
