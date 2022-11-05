const express = require('express');

const WebRouteControllers = require('./WebRoutesController')

const { requireAuth } = require('../Middlewares/AuthMiddleware')

const Router = express.Router();

// Paths Related to Blogs
Router.get('/create', requireAuth, WebRouteControllers.create_get);
Router.post('/create', WebRouteControllers.create_post);

Router.get('/allblogs', WebRouteControllers.allblogs_get);

Router.get('/delete/:id', requireAuth, WebRouteControllers.deleteBlog_get);

// Paths related to Auth System
Router.get('/login', WebRouteControllers.login_get);
Router.post('/login', WebRouteControllers.login_post);

Router.get('/signup', WebRouteControllers.signup_get);
Router.post('/signup', WebRouteControllers.signup_post);

Router.get('/logout', WebRouteControllers.logout);

module.exports = { Router }