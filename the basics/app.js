const http = require('http');



const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write();
    res.end();
});

server.listen(3000);