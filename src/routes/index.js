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
router.get('/signup', controller.signup);
router.get('/forgot-password', controller.forgotPassword);
router.get('/reset-password', controller.resetPassword);
router.get('/reset-success', controller.resetSuccess);
router.get('/welcome', controller.welcome);
router.get('/dashboard', controller.dasboard);
router.get('/land', controller.land);
router.get('/house', controller.house);
router.get('/land-view', controller.landView);
router.get('/house-view', controller.houseView);
router.get('/investment', controller.investment);
router.get('/transfer', controller.transfer);



module.exports = router;