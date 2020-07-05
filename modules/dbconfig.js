/// ***************** ***************** *****************
/// ***************** ***************** Config DB CONNECTION
const MongoClient = require('mongodb').MongoClient;
const mongosee = require('mongoose');

/// ***************** 

const uri = "mongodb+srv://TrinhKieu:piGqGMqYxRDLkpCg@cluster0-qtwld.mongodb.net/atnshop?retryWrites=true&w=majority";




/// ***************** ***************** *****************
/// ***************** Database & Bảng dữ liệu cần Truy vấn
const NameDataBase =  "atnshop"; // "CloudDB";



module.exports = {
    Client : MongoClient,
    Mongosee : mongosee,
    URI : uri,
    DBname : NameDataBase,
};
