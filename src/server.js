var express = require('express');
var app = express();

//Configurando o servidor para usar o EJS
app.set('view engine', 'ejs');

//Passando o caminho da pasta views 
app.set('views', 'src/views');

//Configurando pasta publica para arquivos estáticos
app.use(express.static('src/public'));

//Mostrando a página index.ejs
app.get('/', function(request, response){
    response.render('index');
});

//Iniciando o servidor
app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000')
});