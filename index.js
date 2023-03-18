const express = require("express");
const app = express();
const port = 4000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get("/", (req, res) => {
    res.json(["Hello this IoT platform"]);
})
app.post("/", (req,res) => {
    res.json("Received");
    console.log(req.body);
})
app.listen(port, () => {
    console.log(`Listening on port ${port} `)
})