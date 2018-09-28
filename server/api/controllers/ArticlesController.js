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
    let {title,url,description,id} = req.body;

    let article = {title,url,description,id};

    Articles.update({id}, article)
      .then(data => {
      return res.ok(data);
  });

  },

  creat(req,res) {
    let {title, description, url} = req.body;
    Articles.create({title, description, url})
      .then(() => res.ok(200));
  },

  delete(req,res) {
    Articles.destroy({id:req.params.id})
      .then((article) => res.ok(article));

  }
};

