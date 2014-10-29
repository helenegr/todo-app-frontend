RADON TODO APP FOR FRONTEND DEVELOPER
=================

## Introduction

Create a todo application where you can add tasks, remove and update them. 
Each task object should have three properties, title (string), compltetd (boolean) and an _id (this will be returned from from the server when we create a new todo and is the reference when we update or remove each item).

The application should be a single page application so only work from the index.html file inside app/views.
Javascript and css should be placed in the public folder.

When the application starts load all todos from the server, this can be done either before the application starts or async.

As a plus the application should be able to:
* update all to completed 
* delete all completed todos
* only display completed todos
* only display not completed todos

As a big plus:
* set up some tests for the application. mocha or yasmin for example.
* Filter/search the todo-list for a specific todo.

The application can be written in any style or with any framework as long as you can motivate it and keep in mind that the app should be reuseable.

## Design and wireframe

You can find the design and wireframe for the application inside the design folder.

## Backend endpoints

GET all todos from the server with:
- '/get-todo', use GET as a method.
- returns an array:
- [{title: 'my first title', completed: true, _id: '61265198461'}, {title: 'my second title', completed: false, _id: '65418132183'}]

Create a new todo with:
- '/post-todo', use POST as a method.
- pass the todo object as a property eg:
- data: todo: myTodoObject

Update a single todo with:
- '/put-todo/the-id-for-the-todo', use PUT as a method.
- pass the todo object as a propery eg
- data: todo: myTodoObject

Update multiple todo objects with:
- '/put-todo', use PUT as a method.
- pass the todo object as a propery in an array eg
- data: todo: [myTodoObject]

To delete a todo or multiple todos use the same method as Update 
but with the endpoint '/delete-todo', use PUT as a method

Each request allways returns the updated object

## Requirements

* Grunt
* NodeJs
* mongodb

## Installation

Run "npm install" inside folder from the command line to install all dependecies.
Start the server with "grunt" from the command linde

Navigate to http://localhost:3000

## Questions
Please contact me at developer@houseofradon.com


