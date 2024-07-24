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

const livereload = require("livereload");
const chokidar = require("chokidar");
const path = require("path");
const enableHotReload = (app) => {
// Crie um servidor livereload que observa mudanças nos diretórios de visualizações e públicos
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "views"));
liveReloadServer.watch(path.join(__dirname, "public"));
// Middleware para conectar o livereload ao Express
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
// Use chokidar para observar os arquivos e reiniciar o servidor
const watcher = chokidar.watch([path.join(__dirname, "views"), path.join(__dirname,
"public")]);
watcher.on("change", (file) => {
console.log(`${file} has been changed`);
liveReloadServer.refresh("/");
});
liveReloadServer.server.once("connection", () => {
setTimeout(() => {
liveReloadServer.refresh("/");
console.log("Browser reload triggered");
}, 100);
console.log(`Servidor rodando em http://localhost:${port}`)
});
};
