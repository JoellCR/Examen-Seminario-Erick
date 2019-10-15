var express =require('express');
var router = express.Router();

var fotograApiRoutes= require('./fotografias/index');
router.use('/foto', fotograApiRoutes );

module.exports=router;