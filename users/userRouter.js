const express = require('express');
const db = require('./userDb');

const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
  db.get()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({error: "Couldn't get user"})
    })
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db.getById(id)
    .then(user => {
      if(user){
        res.status(200).json(user)
      } else {
        res.status(404).json({error: "Id not found"})
      }
    })
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', validateUserId, (req, res) => {
  const { id } = req.params;
  const { name } = req.body

  db.update(id, name)
    .then(edit => {
      res.status(200).json(edit)
    })
});

//custom middleware

function validateUserId(req, res, next) {
  const { id } = req.params.id;
  db.getById(id)
    .then(user => {
      if (user){
        next();
      } else {
        res.status(404).json({error: "User ID not found."})
      }
    })
};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
