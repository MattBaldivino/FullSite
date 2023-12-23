const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json({limit: "25mb"}));
app.use(express.urlencoded({limit: "25mb"}));
app.use((req, res, next)=>{
	res.setHeader("Access-Control-Allow-Origin", "*");
	next();
});
	
let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		type: "OAUTH2",
		user: process.env.EMAIL,
		pass: process.env.WORD,
		clientId: process.env.OAUTH_CLIENTID,
		clientSecret: process.env.OAUTH_CLIENT_SECRET,
		refreshToken: process.env.OAUTH_REFRESH_TOKEN,
	},
});

transporter.verify((err, success) => {
	err
		? console.log(err)
		: console.log(`=== Server is ready to take messages: ${success} ===`);
});
app.post("/send", function (req, res){
	let mailOptions = {
		from: `${req.body.mailerState.email}`,
		to: process.env.EMAIL,
		subject: `Message from: ${req.body.mailerState.email}`,
		text: `${req.body.mailerState.message}`,
	};

	transporter.sendMail(mailOptions, function (err, data){
		if(err){
			res.json({
				status: "fail",
			});
		}else{
			console.log("== Message Sent ==");
			res.json({
				status: "success",
			});
		}
	});
});

let port = process.env.PORT || 80;
app.listen(port, () => {
	console.log(`server is running on port: ${port}`);
});