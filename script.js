const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("oi");
})

app.listen(8000);