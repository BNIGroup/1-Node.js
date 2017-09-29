const http = require('http');
const server = http.createServer(handlingServer);
const PORT = 3000;

function handlingServer(req, res) {
    var body = 'Hello World';
    res.write(body);
    res.end();
}

server.listen(PORT, function() {
    console.log('server is running');
});
