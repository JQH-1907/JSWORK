const express = require('express')
const app = express()
const bodyParer = require("body-parser")

app.use(express.static('.'))
app.use(bodyParer.json());
app.use(bodyParer.urlencoded({ extended: false}));
app.post('/formBuilder', function (req,res) {
    console.log(req.body)
    res.send(req.body)
})

app.listen(8080, () => console.log('node express 服务器已启动，监听端口：8080'))

const openDefaltBrowser = function (url) {
    var exec = require('child_process').exec;
    switch (process.platform) {
        case "darwin":
            exec('open ' +url)
            break;
        case "win32":
            exec('start ' +url);
            break;
        default:
            exec('xdg-open', [url]);   
    }
}
openDefaltBrowser('http://localhost:8080')