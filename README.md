RADON TODO APP FOR FRONTEND DEVELOPER
=================

## introduction

Create a todo application where you can add tasks, remove and update them. 
Each task object should have three properties, title (string), compltetd (boolean) and an _id (this will be returned from from the server when we create a new todo and is the reference when we update or remove each item).

When the application starts load all todos from the server, this can be done either before the application starts or async.



## Backend endpoints

GET all todos from the server with:
'/get-todo', use GET as a method.
returns an array:
[{title: 'my first title', completed: true, _id: '61265198461'}, {title: 'my second title', completed: false, _id: '65418132183'}]

Create a new todo with:
'/post-todo', use POST as a method.
pass the todo object as a property eg:
data: todo: myTodoObject

Update a single todo with:
'/put-todo/the-id-for-the-todo', use PUT as a method.
pass the todo object as a propery eg
data: todo: myTodoObject

Update multiple todo objects with:
'/put-todo', use PUT as a method.
pass the todo object as a propery in an array eg
data: todo: [myTodoObject]

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


