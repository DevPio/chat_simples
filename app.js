const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const consign = require('consign');
const routes = require('./routes/home');
const expressSession = require('express-session');
const cookiParser = require('cookie-parser');
const bodyParse = require('body-parser');
const methodOverride = require('method-override');
const {notFoun,error} = require('./routes/error');
const app = express();


const server = http.Server(app);
const io = socketIo(server);

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(cookiParser('chat'))
app.use(expressSession())
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'));
app.use(routes);


consign()
.include('socket')
.into(io)

app.use(notFoun);
app.use(error);

server.listen(3000, ()=> console.log('servidor rodando na porta 3000'));