const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").createServer(app);

// require router
const routerV1 = require('./src/routes/v1/index');
const routerV2 = require('./src/routes/v2/index');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// cek server
app.get("/ping", (req, res) => {
    res.json({
        error: false,
        message: "Server is healthy",
    });
});

// buat build tabel
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
app.use('/v2/', routerV2);