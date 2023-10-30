const express = require("express")
const app = express()
const handlebars = require('express-handlebars')

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

app.post('/add', function(req, res){ //não tem como acessar rotas com o post pela URL
    res.send("Texto: " + req.body.titulo + " Conteudo: " + req.body.conteudo) //pegar os dados enviados pelo campo titulo e depois conteudo
})

app.get("/", function(req,res){
    res.send("Ola")
})

app.listen(8081, function(){
    console.log("Servido etá rodando na porta: https://LocalHost:8081")
})  