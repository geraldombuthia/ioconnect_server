const express = require("express");
const router = express.Router();

// Contains the routes to data acquisition

router.get("/", (req, res, next) => {
    res.json(["Data get"])
    console.log("data get");
})
router.post("/", (req, res, next) => {
    res.json(req.body)
    console.log(req.body);
    
})
module.exports = router;