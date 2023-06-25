const express = require("express");
const bcrypt = require("bcryptjs")
const mongodb = require("mongodb")




const app = express();
const objectid = mongodb.ObjectId

const db = require("./data/database")


app.use(express.urlencoded({extended:false}))

app.post("/register/users", async (req, res) => {
    const enterPassword = req.body.password
    const encodedPass = await bcrypt.hash(enterPassword , 12)
    const userdata = 
    { 
        username : req.body.username,
        email: req.body.email,
        password : encodedPass
    }
    await db.getdb().collection("users").insertOne(userdata)
    res.redirect("/login");
});

app.post("/login/users", async (req, res) => {
    const enterusername = req.body.username
    const enterPassword = req.body.password

    const userExist = await db.getdb().collection("users").findOne({username : enterusername})

    if (!userExist){
        console.log("user not exist")
        return res.redirect("/login")
    }

    const comparepass = await bcrypt.compare(enterPassword , userExist.password)

    if(!comparepass){
        console.log("enter Password Correctly")
        return res.redirect("/login")
    }

    console.log("Have welcome page access")
    res.redirect("/welcome")
        
});


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