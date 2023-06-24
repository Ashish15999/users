const express = require("express");
const mongodb = require("mongodb")




const app = express();
const objectid = mongodb.ObjectId

const db = require("./data/database")


app.use(express.urlencoded({extended:false}))

app.post("/register/users", async (req, res) => {
    const userdata = 
    { 
        username : req.body.username,
        email: req.body.email,
        password : req.body.password
    }
    const result = await db.getdb().collection("users").insertOne(userdata)
    console.log(result)
    res.redirect("/login");
});

app.post("/login/users", async (req, res) => {
    const users  = await db.getdb().collection("users").find().toArray()
    for (let i of users){
        if ((i.username === req.body.username) && (i.password === req.body.password)) {
            res.redirect("/welcome")
        }
        else{
            res.redirect("/login")
        }
}});


app.post("/welcome/notes", async (req, res) => {
    const usernotes = 
    { 
        notes : req.body.notes,
    }
    const notes  = await db.getdb().collection("notes").insertOne(usernotes)
    console.log(notes)
    res.redirect("/welcome")
});



db.connectDb().then(function(){
    app.listen(8000);
  })