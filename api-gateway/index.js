const express = require('express');
const gateway = require('fast-gateway');
const port = 9090;

const server = gateway({
    routes: [{
        prefix: '/order',
        target: 'http://localhost:1000/',
        methods: ['POST','GET'],
        // middlewares: [auth]
    },
    {
        prefix: '/pay',
        target: 'http://localhost:2000/'
    }
]});

server.get('/mygateway', (req,res) => {
 res.send('gateway is called')
});

server.start(port).then(() => {
    console.log(`Api gateway is listening to port ${port}`);
}).catch((err) => {
    console.log(err);
});