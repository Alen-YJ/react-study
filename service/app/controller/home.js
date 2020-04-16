'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const { ctx } = this
    ctx.body = '<h2>list page</h2>'
  }
}

module.exports = HomeController;
