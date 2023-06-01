const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
//dotenv
require("dotenv/config");
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));


app.use("api/auth", authRoute);

app.listen(5000, () => {
	console.log("Server is running on port 5000");
});

