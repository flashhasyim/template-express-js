var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    return res.send({
        project:'API v1 Web Service '
    });
});


module.exports = router;