const express = require("express");
const router = express.Router();
// This will be the routes for informative windows and messages
router.get("/", (req, res) => {
    res.json(["Hello this IoT platform"]);
})
router.post("/", (req,res) => {
    res.json(req.body);
    console.log(req.body);
})

module.exports = router;