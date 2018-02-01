# Express + Bootstrap + Pug

This boilerplate loads [Bootstrap 4](https://getbootstrap.com/), [jQuery](http://jquery.com/) and [popper.js](https://popper.js.org/) and more useful stuff.  
We included everything you need to start a small project from scratch.

The ```npm start``` command will not only start the application, but also watch for changes of your SCSS and JavaScript files, using [webpack](https://webpack.js.org/). The [nodemon](https://nodemon.io/) package is used to automatically restart the server, if your scripts change, while it's running.

## Installation

1. Download the boilerplate as .zip-file.
1. Extract the files and copy them to your project root.
1. Run ```npm install``` in your terminal to get all needed packages.
1. Copy __the variables.env.sample__ file to __variables.env__.
1. Run ```npm start``` to start the node.js application.

## Configuration

The configuration of the basic application (environment + port) is done in the __variables.env__ file.  
If you need more settings, that you would like to exclude from Git, you should add them here.

## Routing

The routing is done in the __/routes/web.js__ file.  
Just edit it and make it fit to your needs.

## Views

The views are located in the __/views/__ directory and we use [Pug](https://github.com/pugjs/pug) as the default template engine.