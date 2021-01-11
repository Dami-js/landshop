const { Request, Response } = require('express');

class HomeController {
  constructor() { };
  /**
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  index(req, res) {
    res.render('pages/index')
  }

  /**
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  login(req, res) {
    res.render('pages/login')
  }

  /**
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  signup(req, res) {

    const { step } = req.query;
    if (step == 3) {
      res.render('pages/signup-step-3')
    } else if (step == 2) {
      res.render('pages/signup-step-2')
    } else {
      res.render('pages/signup')
    }
  }

  /**
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  forgotPassword(req, res) {
    res.render('pages/forgot-password')
  }

  /**
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  resetPassword(req, res) {
    res.render('pages/reset-password')
  }

  /**
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  resetSuccess(req, res) {
    res.render('pages/reset-success')
  }

  /**
   * Welcome page route
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  welcome(req, res) {
    res.render('pages/welcome')
  }

  /**
   * Welcome page route
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  land(req, res) {
    res.render('pages/admin/land')
  }

  /**
   * Welcome page route
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  house(req, res) {
    res.render('pages/admin/house')
  }

  /**
   * Welcome page route
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  landView(req, res) {
    res.render('pages/admin/land-view')
  }

  /**
   * Welcome page route
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  houseView(req, res) {
    res.render('pages/admin/house-view')
  }

  /**
   * Welcome page route
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  investment(req, res) {
    res.render('pages/admin/investment')
  }

  /**
   * Welcome page route
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  transfer(req, res) {
    res.render('pages/admin/transfer')
  }

  /**
   * Dashboard page route
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  dasboard(req, res) {
    const { showMore, edit } = req.query;
    if (showMore) {
      res.render('pages/admin/show-more')
    } else if (edit) {
      res.render('pages/admin/edit')
    }
    else {
      res.render('pages/admin/dashboard')
    }
  }
}


module.exports = HomeController;
