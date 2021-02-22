const express = require("express")
const bodyp = require("body-parser")
const { Webhook } = require("discord-webhook-node")
const mail = require("nodemailer")
const app = express();

app.use(express.urlencoded({ extended: true }));

var trans = mail.createTransport({
    service: "gmail",
    auth: {
        user: "automaticmail.frany6710@gmail.com",
        pass: ""
    }
})

app.get("/online", (req,res) => {
    res.send("online")
})

app.post("/send", (req, res) => {
    let mail = req.body.email
    let name = req.body.name
    console.log(req.body)
    res.redirect("https://frany6710.github.io/myPage/index.html")
    var mailOptions = {
        from: "Sistema de mails automaticos de frany6710 <automaticmail.frany6710@gmail.com>",
        to: mail,
        subject: "Espereme",
        text: "Frany lo contactará en un plazo de 24 horas"

    }
    trans.sendMail(mailOptions, (err, info) => { 
    if (err) {
        return console.log(err)
    }
    const hook = new Webhook("https://discord.com/api/webhooks/812137564097085492/RmVQqyCNwbEN8Uvv2itlz3eFb7lK6gVA50L1ZregtPXKKLHYDkabhHVc0ko3WyECqBqL")
    hook.setUsername("Frany6710 Mails")
    hook.send("Mail: " + mail + "\nNombre: " + name)
    })
})
    



app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000")
})
