const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.use(express.static(path.resolve(_dirname, "./Website/build")));
app.use(express.json({limit: "25mb"}));
app.use(express.urlencoded({limit: "25mb"}));
app.use((req, res, next)=>{
	res.setHeader("Access-Control-Allow-Origin", "*");
	next();
});

function sendEmail({recipient_email, subject, message}){
	return new Promise((resolve, reject) => {
		var transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL,
	 			pass: process.env.PASSWORD
			},
		});

		const mail_configs = {
			from: recipient_email,
			to: process.env.EMAIL,
			subject: subject,
			text: "Contact: " + recipient_email + "\n" + message
		};
		transporter.sendMail(mail_configs, function(error, info) {
			if(error){
				console.log(error);
				return reject({message: "An error has occurred"});
			}
			return resolve({message: "email sent successfully"});
		});
	});
}



app.get("/", (req, res)=>{
	sendEmail()
		.then((response) => res.send(response.message))
		.catch((error) => res.status(500).send(error.message));
});

app.post("/send_email", (req, res) =>{
	sendEmail(req.body)
		.then((response) => res.send(response.message))
		.catch((error) => res.status(500).send(error.message));
})

app.listen(port, () =>{
	console.log("nodemailer project is listening at https://localhost: " + port);
});
	
     