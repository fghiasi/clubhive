const express = require('express');
const router = express.Router();

const db = require('../models/signup');



/* post to signup page. */
router.post("/", async (req, res) => {
    console.log("sign up page ready for post request: ");

    let { name,user_name, email, password, password2 } = req.body;

    let errors = [];

    console.log({
        name,
        user_name,
        email,
        password,
        password2
    });
    await db.registerUser(name, user_name, email, password)
    res.redirect(`/?username=${user_name}`)

});


/* GET home page. */
router.get('/', async function(req, res, next) {


    res.render('signup');
});


module.exports = router;
