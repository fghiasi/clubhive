const express = require('express');

const router = express.Router();




/* GET contact  in page. */
router.get('/', async function(req, res, next) {

    res.render('contactus');
});

module.exports = router;
