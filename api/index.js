const express = require('express');
const app=express();
const dotevn=require('dotenv');
const mongoose=require('mongoose');
const authRoute=require('./routes/auth')


dotevn.config()

app.use(express.json())


app.use("/api/auth",authRoute)


mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("App connected to database");
		app.listen(process.env.PORT, () => {
			console.log(`App is listening to port ${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
