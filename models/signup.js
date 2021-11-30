const db = require('./db');
const bcrypt = require("bcrypt");

/**
 * Register User
 * @return {Promise<Participant>} registerUser
 * @param name
 * @param email
 * @param password
 */
async function registerUser(user_name,user_user_name, user_email, user_password) {
    // console.log(`${name} wants to register with email: ${email} and pass ${password}`);
    let hashedPassword = await bcrypt.hash(user_password, 10);
    console.log(hashedPassword);
    db.query(
        `INSERT INTO users (name, username , email, password)
                VALUES ($1, $2, $3, $4)
                RETURNING id, password`,
        [user_name,user_user_name, user_email, hashedPassword],
        (err, results) => {
            if (err) {
                throw err;
            }
            console.log("sign up result: ");
            console.log(results.rows);
        }
    );
}


module.exports = {
    registerUser,
}

