const mongoose = require('mongoose');
require("dotenv").config();
const DATABASE_URL = "mongodb+srv://ankitprajapati24012003:aSSBBEP70MXiA6Hv@cluster1.cjd1eue.mongodb.net/FOG"
const dbconnect = () => {
    mongoose.connect(DATABASE_URL, {
        // Remove the deprecated options
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to the database');
    }).catch((err) => {
        console.error('Error in database connection:', err);
    });
}

module.exports = dbconnect;
