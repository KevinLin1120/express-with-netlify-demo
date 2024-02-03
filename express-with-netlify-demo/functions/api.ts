// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";
var indexRouter = require('../routes/index');
var userRouter = require('../routes/users');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));

app.use("/", indexRouter);
app.use("/users/", userRouter);

export const handler = serverless(app);
