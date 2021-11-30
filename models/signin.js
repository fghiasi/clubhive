const db = require('./db');
const bcrypt = require("bcrypt");
const passport = require("passport");

/**
 * Register User
 * @return {Promise<Participant>} registerUser
 * @param name
 * @param email
 * @param password
 */

async function loginUser(user_name, user_password) {
    console.log(user_name, user_password);
    console.log("getting db to fetch user info for a login");
    const login_info = db.query(
        `SELECT * FROM users as userinfo WHERE userinfo.username = $1`,
        [user_name]
        // ,(err, results) => {
        //     if (err) {
        //         console.log("error");
        //         console.log(err);
        //         throw err;
        //     }
        //     console.log("getting results");
        //     console.log(results)
        // }
    );
    console.log("getting results for post login");
    console.log(login_info);

}


module.exports = {
    loginUser,
}

