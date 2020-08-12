const server = require('./api/server');

const port = 8000 || process.env.PORT;

server.listen(port, () => {
    console.log(`\n === API Server Listening on port: ${port} === \n`)
});