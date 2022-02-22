var User = require("../models/users.model");
var MD5 = require("md5");
const GlobalService = require("../core/global.service.js");
require("dotenv").config();

exports.doSignup = (req, res) => { // SIGNUP
	postData = req.body;
	var newUser = new User(postData);
	newUser.updatedAt = new Date();
	newUser.createdAt = new Date();
	if (newUser.password) {
		newUser.password = MD5(postData.password);
	}
	newUser.save((err, data) => {
		if (err) {
			return res.json({
				status: 500,
				message: "Failed to create account.",
				data: err
			});
		} else {
			return res.json({
				status: 200,
				message: "Account created succesfully.",
				data: data
			});
		}
	});
};

exports.doSignin = (req, res) => { // DO SIGNIN
	var postData = req.body;
	var where = {
		email: postData.email,
		password: MD5(postData.password),
	};
	User.findOne(where, function (err, userResp) {
		if (userResp) {
			req.session.current_user = userResp;
			res.json({
				status: 200,
				message: "Logged in successfully.",
				data: userResp,
			});
		} else {
			res.json({
				status: 500,
				message: "There is some error while fetching the user!",
				data: err,
			});
		}
	});
};

exports.emailAlreadyExits = (req, res) => { // GET THE USERNAME FOR CHECKING EXISTING
	var postData = req.body;
	var whereObj = {
		email: postData.email
	}
	Users.find(whereObj, function (err, data) {
		if (err) {
			return res.json({
				status: 500,
				message: 'Some error occrred while getting the email already exits email.',
				data: err
			});
		} else {
			return res.json({
				status: 200,
				message: 'This email is not getting successfully.',
				data: data
			});
		}
	});
}

exports.forgotPassword = (req, res) => { // GET THE USERNAME FOR CHECKING EXISTING
	var postData = req.body;
	postData.email = postData.email.toLowerCase();
	const email = postData.email;
	if (email) {
		var whereObj = {
			email: postData.email,
		};
		User.findOne(whereObj, function (err, user) {
			if (user) {
				const rString = exports.randomString(
					32,
					"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
				);
				User.updateOne({
						_id: user._id,
					}, {
						forgotLink: rString,
						forgotStatus: 1,
					},
					function (err, forgotResp) {
						if (forgotResp) {
							const linkParam =
								process.env.WEBSITE_URL +
								"recoverPassword/" +
								user._id +
								"/" +
								rString;
							var prepareEmailConfig = {
								email: user.email,
								firstName: GlobalService.capitalize(user.firstName),
								markerData: {
									name: GlobalService.capitalize(user.firstName),
									websiteUrl: process.env.WEBSITE_URL,
									recoverPasswordLink: linkParam,
								},
								templatePath: "public/assets/emailtemplates/forgot-password.html",
								subject: "Reset your password for stock-scanner your account",
								html: "",
								templateName: "forgot-password", // NEW
							};

							GlobalService.prepareEmailData(
								prepareEmailConfig,
								(err, resp) => {
									return res.json({
										status: 200,
										// emailLink: linkParam,
										message: "Please check your email, Reset password link has been sent to " +
											user.email,
										data: resp,
									});
								}
							);
						} else {
							return res.json({
								status: 500,
								message: "No account found with this email address : " + email,
							});
						}
					}
				);
			} else {
				return res.json({
					status: 500,
					message: "No account found with this email address : " + email,
				});
			}
		});
	} else {
		return res.json({
			status: 500,
			message: "No account found with this email address : " + email,
		});
	}
}

exports.randomString = (length, chars) => {
	let result = '';
	for (let i = length; i > 0; --i) {
		result += chars[Math.floor(Math.random() * chars.length)];
	}
	return result;
}

exports.authentication = (req, res) => {
	var allData = req.body;
	if (req.session.current_user) {
		return res.json({
			status: 200,
			message: 'Api authenticated Successfully.',
			current_user: req.session.current_user
		});
	} else {
		return res.json({
			status: 500,
			message: 'Authentication failed',
			current_user: null
		});
	}
};

exports.logout = (req, res) => {
	req.session.destroy();
	return res.json({
		status: 200,
		message: 'Logouted successfully.',
	});
};