const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const Post = require('./models/Post.js') // receber o model post

//config
    // template engine para o handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

    // processar os dados de form HTML através de requisição post
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// rotas
app.get('/cad', function(req, res){
    res.render('formulario')  //renderizar a pagina formulario
})

//Cadastrar as informações do hmtl ao db
app.post('/add', function(req, res){ 
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/') // quando o post for criado, sera redimensionado para outra página
    }).catch(function(erro){
        res.send("Erro: " +erro)
    })
})

app.get("/", function(req,res){
    res.render('./layouts/home')
})

app.listen(8081, function(){
    console.log("Servido etá rodando na porta: https://LocalHost:8081")
})  