const http = require('http');

http.createServer((req, res) => {

    res.setHeader('Content-Disposition', 'attachment; filename="test.csv"');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("id, nombre\n");
    res.write("1, Juan\n");
    res.write("2, Pedro\n");
    res.write("3, Lucas\n");
    res.write("4, Marcos\n");
    res.write("5, Mateo\n");
    res.end();
})
    .listen(8080);

console.log('Server running at http://localhost:8080/');
