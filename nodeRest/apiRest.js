var listCarte = [
    {
        "numeroCarte" : "00000",
        "codeCarte" : "456"
    },
    {
        "numeroCarte":"11111",
        "codeCarte":"123"
    }
    ,
    {
        "numeroCarte":"22222",
        "codeCarte":"455"
    }
    ,
    {
        "numeroCarte":"33333",
        "codeCarte":"234"
    }
    ];
const express = require("express");
const server = express();
const http = require("http").Server(server);
http.listen(3000,()=>{console.log("connecté")});
server.get("/",(requete,res) =>{res.send("ui")});
server.get("/verifCarte",(requete,res)=>{
    
    num = requete.query.numeroCarte;
    code = requete.query.codeCarte;
    var resultat = false 
    console.log(num)
    console.log(code)
    listCarte.forEach((value, index) => {
        
        if (value["numeroCarte"] == num && value["codeCarte"]== code){

            resultat = true

        }
        
    })
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(resultat);
});