const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const http = require('http');

const hostname = 'localhost';
const port = 3000;
const app = express();
const dishRouter = require('./routes/dishRouter.js');
const promoRouter = require('./routes/promoRouter.js');
const leaderRouter = require('./routes/leaderRouter.js');

app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1> This is an Express server. </h1></body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}/${port}/`);
});