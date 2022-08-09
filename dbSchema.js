const mongodb = require('mongodb');
const mongoClient = mongodb.mongoClient;
const dbName = 'class-db'
const dbUrl = `mongodb+srv://Raghav8197:QwErTy8197@cluster0.sk3se.mongodb.net/${dbName}`;
module.exports= {dbUrl, dbName, mongodb,mongoClient}