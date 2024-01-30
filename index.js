const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").createServer(app);
const routerV1 = require('./src/v1/routes/index');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/ping", (req, res) => {
    res.json({
        error: false,
        message: "Server is healthy",
    });
});

// buat build tabe;
app.get("/dev/build", (req, res) => {
    // inisiasi database
    const db = require("./src/v1/models/index");
    db.sequelize.sync({ alter: true });
    res.json({
        error: false,
        message: "sukses build",
    });
});

var Server = http.listen(8123, () =>{
    // cek server
});

// inisialisasi router
app.use('/v1/', routerV1);