const http = require('http');

const server = http.createServer((req, res) => {
    const chunks = [];

    req.on("data", (chunk) => {
        chunks.push(chunk);
    })

req.on("end", () => {
    const body = Buffer.concat(chunks).toString();

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1> Welcome to the HomePage</h1> ");
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ name: "Seba", info: "I love being a loser" }));
    } else if (req.url === "/echo") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ method: req.method, url: req.url, body }));
    } else {
        res.writeHead(404, { "Content-Type": "test/plain" });
        res.write("ERROR: 404 , Not Found")
    }
    res.end();
});
});

server.listen(3000, () => {
    console.log('Can you see me?');
});