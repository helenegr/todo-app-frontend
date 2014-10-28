var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  _ = require('underscore'),
  Todo = mongoose.model('Todo');

module.exports = function (app) {
  app.get('/', function (req, res, next) {
    res.render('index.html');
  });

  app.get('/get-todos', function(req, res) {
    Todo.find(function (err, todos) {
      if (err) return next(err);
      res.json(todos)
    });
  })

  app.post('/post-todos', function(req, res) {

    var request = req.body.todo
    var todo = new Todo(request)

    todo.save(function(err, todo) {
        res.json(todo)
    })

  })

  app.put('/put-todos/:id?', function(req, res) {


    if (req.params.id) {

      var todo = req.todo
      todo = _.extend(todo, req.body.todo)

      todo.save(function (err) {
        if (!err) {
          res.json(todo)
        }

      });

    } else {

      if (!req.body.todo || req.body.todo.length <= 0) {
        return res.json([])
      }

      var updatedTodoas = req.body.todo
      var id = _.pluck(updatedTodoas, '_id');

      Todo.find({
        '_id': { $in: id}
      }, function(err, todosFromDb){

         saveAll(updatedTodoas, todosFromDb, function(todos) {

           res.json(todos)

         })

      });

      function saveAll(updatedTodos, todosFromDb, callback ){
        var count = 0;
        todosFromDb.forEach(function(todoFromDb) {

            var extend = _.find(updatedTodos, function(eachTodo){ return eachTodo._id == todoFromDb._id });
            var todoFromDb = _.extend(todoFromDb, extend)

            todoFromDb.save(function(err){
                if (err) {
                  console.log(err)
                  return callback(updatedTodos);
                }
                count++;
                if( count == todosFromDb.length ){
                   callback(updatedTodos);
                }
            });
        });
      }
    }

  })

  app.put('/delete-todos/:id?', function(req, res) {

    if (req.params.id) {

      var todo = req.todo
      todo.remove(function (err) {
        if (!err) {
          res.json(todo)
        }

      });

    } else {

      if (!req.body.todo || req.body.todo.length <= 0) {
        return res.json([])
      }

      var updatedTodoas = req.body.todo
      var id = _.pluck(updatedTodoas, '_id');

      Todo.find({
        '_id': { $in: id}
      }, function(err, todosFromDb){

         saveAll(updatedTodoas, todosFromDb, function(todos) {

           res.json(todos)

         })

      });

      function saveAll(updatedTodos, todosFromDb, callback ){
        var count = 0;
        todosFromDb.forEach(function(todoFromDb) {

            var extend = _.find(updatedTodos, function(eachTodo){ return eachTodo._id == todoFromDb._id });
            var todoFromDb = _.extend(todoFromDb, extend)

            todoFromDb.remove(function(err){
                if (err) {
                  console.log(err)
                  return callback(updatedTodos);
                }
                count++;
                if( count == todosFromDb.length ){
                   callback(updatedTodos);
                }
            });
        });
      }

    }

  })

  app.param('id', function(req, res, next) {
    Todo.findOne({_id: req.params.id})
    .exec(function(err, data) {
      req.todo = data;
      next()
    })
  })

};
