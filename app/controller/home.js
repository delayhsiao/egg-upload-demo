'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    return ctx.render('index.html');
  }

  async upload() {
    const { ctx } = this;
    const post = ctx.response.body;
    console.log(ctx.request.files[0]);
    return this.ctx.body = {};
  }
}

module.exports = HomeController;
