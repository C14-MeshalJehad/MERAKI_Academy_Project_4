const mongoose = require("mongoose")

mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        console.log("Database is connected");
    })
    .catch(() => {
        console.log(err);
    })