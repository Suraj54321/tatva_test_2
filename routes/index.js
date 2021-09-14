const express = require('express');
var app = express();
var router = express.Router();

var auth = require('../controller/AuthController');
var blog = require('../controller/BlogController');
var authCheck = require('../middleware/checkValidToken');

router.post('/auth/login',auth.login);
router.post('/auth/register',auth.register);
router.post('/blog/create',authCheck,blog.createBlog);

module.exports=router;