var express = require('express');
var router = express.Router();
var user = require('../db/query');

/* GET users listing. */
router.get('/:id', function(req, res, next) {

    if (!isNaN(req.params.id)) {
        user.getOne(req.params.id).then(user => {
            if (user) {
                delete user.password;
                res.json(user)
            } else {
                res.status(404);
                res.json({
                    message: "User Not Found!"
                })
            }
        })

    } else {
        res.status(500);
        res.json({
            message: "Invalid Input!"
        })
    }
});

module.exports = router;
