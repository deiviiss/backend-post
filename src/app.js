const express = require('express');
const fileUpload = require('express-fileupload');
const routerApi = require('./routes/index.js');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// errors
const { logErrors, ormErrorHandler, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
})); // upload images
app.use(morgan('dev')); //message server
app.use(cors());


//errors
app.use(logErrors) //any errors
app.use(ormErrorHandler) //orm errors
app.use(errorHandler) // send error to client
app.use(boomErrorHandler) //boom errors

routerApi(app);

module.exports = app;