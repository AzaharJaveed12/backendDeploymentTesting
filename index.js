const express = require("express");

app = express();

const port = process.env.PORT || 3500;

app.get("/",(req,res) => {
    console.log("get request acalled");
    res.send("HELLO JAVEED BHAI");
});

app.listen(port,() => {
    console.log("listining to port ", port);
});