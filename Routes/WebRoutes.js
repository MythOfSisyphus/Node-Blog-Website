const express = require('express');

const WebRouteControllers = require('./WebRoutesController')

const Router = express.Router();

// Paths Related to Blogs
Router.get('/create', WebRouteControllers.create_get);
Router.post('/create', WebRouteControllers.create_post);

Router.get('/allblogs', WebRouteControllers.allblogs_get);

Router.get('/delete/:id', WebRouteControllers.deleteBlog_get);

// Paths related to Auth System
Router.get('/login', WebRouteControllers.login_get);
Router.post('/login', WebRouteControllers.login_post);

Router.get('/signup', WebRouteControllers.signup_get);
Router.post('/signup', WebRouteControllers.signup_post);

module.exports = { Router }