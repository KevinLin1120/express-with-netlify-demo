// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";
var indexRouter = require('../routes/index');
var userRouter = require('../routes/users');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = express();

app.set('views', './views'); // 視圖文件的資料夾
app.set('view engine', 'pug'); // 設定使用的渲染引擎（可參考 express 的 app.js）

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users/", userRouter);

export const handler = serverless(app);
