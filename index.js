const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").createServer(app);
const routerV1 = require('./src/v1/routes/index');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/ping", (req, res) => {
    res.send({
        error: false,
        message: "Server is healthy",
    });
});

var Server = http.listen(8123, () =>{

});

// inisialisasi router
app.use('/v1/', routerV1);