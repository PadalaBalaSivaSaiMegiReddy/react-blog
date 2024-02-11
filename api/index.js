const express = require('express');
const app=express();
const dotevn=require('dotenv');
const mongoose=require('mongoose');


dotevn.config()


mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("App connected to database");
		app.listen(PORT, () => {
			console.log(`App is listening to port: ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});





app.listen("5000",()=>{
    console.log(`Server Started on port ${5000}`);
})