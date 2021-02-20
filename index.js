const express = require("express")
const bodyp = require("body-parser")
const app = express();

var urlencoderparser = bodyp.urlencoded({extended: false})

app.post("/send", urlencoderparser, (req, res)=>{
    let mail = req.body.email
    let name = req.body.name
    console.log(`Nombre: ${name} \nEmail: ${mail}`)
    res.send(`Nombre: ${name} \nEmail: ${mail}`)
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Listening on port 3000")
})
