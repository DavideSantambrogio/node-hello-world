// Importazione del modulo HTTP
const http = require("http");

// Configurazione delle variabili di ambiente
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("Hello World!");
}).listen(port, host, () => {
  const serverUrl = `http://${host}:${port}`;
  console.log(`Server avviato su ${serverUrl}`);
});