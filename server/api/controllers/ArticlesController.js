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
    let {title,url,body,id} = req.body;

    let article = {title,url,body,id};

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


    Articles.update({id}, article)
      .then(data => {
      return res.ok(data);
  });

  },

  creat(req,res) {
    let {title, body, url} = req.body;

    Articles.create({title, body, url})
      .then(() => res.ok(200));
  },

  delete(req,res) {
    Articles.destroy({id:req.params.id})
      .then((article) => res.ok(article));

  }
};

