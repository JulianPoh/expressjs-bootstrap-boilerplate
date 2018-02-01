const path = require('path');
const express = require('express')
const routes = require('./routes/web');
const helpers = require('./helpers')
const errorHandlers = require('./handlers/errorHandlers');

// import environmental variables
require('dotenv').config({ path: 'variables.env' });

// create the app
const app = express()

// set the template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// load helpers
app.use((request, response, next) => {
  response.locals.helpers = helpers
  next();
})

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

// set route handling
app.use('/', routes);

// if above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// one of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);

// otherwise this was a really bad error we didn't expect!
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

// start the app
app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
