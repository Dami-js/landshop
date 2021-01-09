const express = require('express');
const HomeController = require('../controllers/home');

/**
 * @typedef Router
 */
const router = express.Router();


const controller = new HomeController();

// init routes
router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/forgot-password', controller.forgotPassword);
router.get('/reset-password', controller.resetPassword);
router.get('/reset-success', controller.resetSuccess);
router.get('/welcome', controller.welcome);
router.get('/dashboard', controller.dasboard);



module.exports = router;