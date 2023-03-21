const express = require("express");
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/iotdata"
const dataRouter = require("./routes/data");
const startRouter = require("./routes/start");
const app = express();
const port = 5500;
let  db;

MongoClient.connect(uri, {useNewUrlParser: true}, (err, client) => {
    if(err) return console.log(err);
    db = client.db("iotdata");
    console.log(`Connected to ${uri} to iotdata db`);
    db.collection('Persons', function (err, collection) {
        
        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        

        db.collection('Persons').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/", startRouter);
app.use("/data", dataRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port} `)
})