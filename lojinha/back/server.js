const express = require("express");

const teste = (req,res)=> {
    res.send("back-end respondendo");
}

const app = express();

app.get("/",teste);

app.listen(3000,() => {
    console.log("back-end respondendo na porta 3000");
});