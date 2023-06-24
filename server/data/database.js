const mongodb = require("mongodb")
const mongoClient  = mongodb.MongoClient

let database ; 

async function connect(){
    const client = await mongoClient.connect("mongodb://127.0.0.1:27017")
    database =  client.db("users")
}

function getdb() {
    if(!database){
        throw{message:"database connection not established"}
    }
    return database
}

module.exports = {
    connectDb:connect,
    getdb:getdb
}