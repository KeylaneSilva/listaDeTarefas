const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

//CONFIG
    //Template Engine - handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    

app.get('/', function(req, res){
    res.render('inicio');
    //res.send("BEM VINDO A SUA LISTA DE TAREFAS");
})


app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
})