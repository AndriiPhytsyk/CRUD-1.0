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
    Articles.find({id: req.params.id})
      .then(post => {
        //console.log(post)
        if (post.length) {

          return res.ok(post);
        }
        else {
          res.send(undefined);
        }
      });
  },

  update(req,res) {
    let Errors = [];
    req.body.url = 'hahah';
    if (req.body.title.length < 2 || req.body.title.length > 40) {
      console.log('title')
      Errors.push("Title size is not Valid ");
    }
    if (req.body.description.length < 2 || req.body.description.length > 1140) {
      console.log('desription')
      Errors.push("Description size is not Valid ");
    }
    if (!/^(ftp|http|https):\/\/[^ "]+$/.test(req.body.url)) {
      Errors.push("Url is not Valid ");
  }


    if(Errors.length){
      return res.send(Errors);
    }
    console.log('url');

    Articles.find({id: req.params.id})
      .then(data =>
      {
        if(data.length){

         // console.log(data);

          let {title,url,description,id} = req.body;

          let article = {title,url,description,id};

          Articles.update({id}, article)
            .then(data => res.ok(data)

            )
        }
        else{

          res.badRequest("хуйовий код");
        }
      });
  },

  creat(req,res){
    let {title, description, url} = req.body;
    Articles.create({title, description, url})
      .then(() => res.ok(200));
  },

  delete(req,res){
    Articles.destroy({id:req.params.id})
      .then((article) => res.ok(article))

  }
};

