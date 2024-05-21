// Configurazione delle variabili di ambiente
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";
require('dotenv').config();

// Importazione dei moduli
const http = require("http");
const { getRandomQuote } = require('./quotes');

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    const randomQuote = getRandomQuote();
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${process.env.MY_VARIABLE}</h1>
        <h1>${randomQuote}</h1>    
    </body>
    </html>
   `);
}).listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server avviato su ${serverUrl}`);
});
