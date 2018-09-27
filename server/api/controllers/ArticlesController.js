/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list(req,res) {
    Articles.find({})
      .then(data => res.json(data));
  },

  getPost(req,res) {
    let id = req.params.id;
    Articles.find({id})
      .then(data => res.json(data));
  },

  update(req,res) {
    let article = {};
    let title = req.param('title');
    let url = req.param('url');
    let body = req.param('body');
    let id = req.param('id');

    if(!title) {
      return res.badRequest({err: "invalid title"})
    }
    if(!url) {
      return res.badRequest({err: "invalid url"})
    }
    if(!body) {
      return res.badRequest({err: "invalid description"})
    }
    if(!title) {
      return res.badRequest({err: "invalid title"})
    }

    article.title = title;
    article.url = url;
    article.body = body;

    Articles.update({id}, article)
      .then(data => {
      return res.ok(data);
  });

  },

  creat(req,res) {
    let title = req.body.title;
    let body = req.body.description;
    let url = req.body.url;
    Articles.create({title, body, url})
      .then(() => res.ok(200));
  },

  delete(req,res) {
    Articles.destroy({id:req.params.id})
      .then((article) => res.ok(article));

  }
};

