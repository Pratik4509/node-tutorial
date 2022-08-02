const http = require('http');
const _ = require('lodash');

const arr = [1, [2, [3, [4]]]]
const newArr = _.flattenDeep(arr)
const server = http.createServer((req, res) => {
    // console.log(req)
    if (req.url == '/') {
        res.write(newArr + '---------');
        res.end("Welcome to Homepage!");
    }
    if (req.url == '/about') {
        res.end("Welcome to About!");
    }
    res.end(`<h1>404 - Page Not Found<h1><a href="/">Back to home</a>`);
})

server.listen(5000)