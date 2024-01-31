var express = require('express')
const myController = require("../../controller/MyController.js")

var router = express.Router()

router.get("/", (req, res) => {
    return res.send({
        project:'API v1 Web Service '
    })
})


router.get('/test', myController.getIndex)

module.exports = router