var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'todo-app-frontend'
    },
    port: 3000,
    db: 'mongodb://localhost/todo-app-frontend-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'todo-app-frontend'
    },
    port: 3000,
    db: 'mongodb://localhost/todo-app-frontend-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'todo-app-frontend'
    },
    port: 3000,
    db: 'mongodb://localhost/todo-app-frontend-production'
    
  }
};

module.exports = config[env];
