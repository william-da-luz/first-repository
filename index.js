const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize')

//config
    //Template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars')

//Conxeao com o banco de dados Mysql
const sequelize = new Sequelize('teste', 'root', 'elefanteJ', {
    host: "localhost",
    dialect: "mysql"
});

// Rotas

app.get('/cad', function(req, res){
    res.render("formulario")
});
    
app.get('/add', function(req, res){
    res.send('CADASTRO RECEBIDO')
});

app.listen(8081, function(){
    console.log("Servidor rodando!");
});













/*app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});


app.get("/Sobre", function(req, res){
    res.send("Minha pagina sobre");
});


app.get("/blog", function(re, res){
    res.send("Bem-vindo ao meu blog")
});>


app.get("/livedeteste", function(req, res){
    res.send("BIRL!")
});

app.get("/rotadeteste", function(req, res){
    res.send("HAHAHAHA")
});


app.get("/ola/:nome/:cargo/:cor", function(req,res){
    res.send("<h1> Ola "+req.params.nome+"</h1>"+ "<h2> Seu cargo eh:"+req.params.cargo+"</h2>"+ "<h3> Sua cor favorita eh:"+ req.params.cor+"</h3>");
    
});*/