const express = require('express');

const router = express.Router();

const db = require('../models/signin');



/* post to signin page. */
router.post("/", async (req, res) => {
    console.log("sign in page ready for post request: ");

    let {user_name, password } = req.body;

    let errors = [];

    console.log({
        user_name,
        password
    });
    const login_respond = await db.loginUser(user_name, password);
    // login_respond.rows.
    console.log(login_respond);
    res.redirect(`/?username=${user_name}`);

});


/* GET sign in page. */
router.get('/', async function(req, res, next) {

    console.log("sign in page ready for get request: ");
    res.render('signin');
});


module.exports = router;
