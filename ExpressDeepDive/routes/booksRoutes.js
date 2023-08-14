const express= require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
    res.send('GET Books with ID ${req.params.id}');
});

router.post("/", (req, res) =>{
    res.send("POST Books");
});

router.put("/", (req, res) => {
    res.send("PUT Books");
});

router.delete("/", (req, res) => {
    res.send("DELETE Books");
});

module.exports = router;