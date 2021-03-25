const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Tarefa = require('./models/Tarefa');

//CONFIG
    //Template Engine - handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    
    //Body-Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.set(bodyParser.json())


app.get('/', function(req, res){
    res.render('inicio');
    //res.send("BEM VINDO A SUA LISTA DE TAREFAS");
})

app.get('/cad', function(req, res){
    res.render('formulario');
})

app.post('/add', function(req, res){
    //inserindo os dados no db
    Tarefa.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
        dataDeEntrega: req.body.dataEntrega
    }).then(function(){
        res.redirect('/visualizar');
    }).catch(function(erro){
        res.send("HOUVE UM ERRO: "+erro);
    })
})

app.get('/visualizar', function(req, res){
    Tarefa.findAll().then(function(tarefas){
        res.render('visualizarTarefas', {tarefas: tarefas});
    }).catch(function(erro){
        res.send("HOUVE UM ERRO: "+erro);
    })
    
})

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
})