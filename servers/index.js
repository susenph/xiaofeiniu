/**
 * xfn服务端系统
 */
const express = require('express');
const PORT = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();
app.listen(PORT, () => {
    console.log(`Server Listening ${ PORT }`);
});
//使用跨域中间件
app.use(cors());
//使用body-parser中间件--把JSON格式的请求主体数据解析出来放入req.body属性
app.use(bodyParser.json());