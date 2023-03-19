const express = require("express");
const dataRouter = require("./routes/data");
const app = express();
const port = 5500;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/data", dataRouter);
app.get("/", (req, res) => {
    res.json(["Hello this IoT platform"]);
})
app.post("/", (req,res) => {
    res.json(req.body);
    console.log(req.body);
})
app.get("/", ()=>{
    console.log("Issues");
})
app.listen(port, () => {
    console.log(`Listening on port ${port} `)
})