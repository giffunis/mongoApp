var express = require('express');
var tutorialRoute = express.Router();
var tutorialController = require('../controllers/tutorial_controller');

/* GET tutorial page. */
tutorialRoute.get('/', tutorialController.home);

module.exports = tutorialRoute;
