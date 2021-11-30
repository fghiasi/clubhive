const express = require('express');

const router = express.Router();



/* GET about us in page. */
router.get('/', async function(req, res, next) {

    res.render('aboutus');
});

module.exports = router;
