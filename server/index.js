var router = require('./router')
var express = require('express');
var app = express();
app.use("/router",router)
const config = require("./config")
app.listen(config.port, () => {
    console.log(`服务运行中 http://localhost:${config.port}`)
})