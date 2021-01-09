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
