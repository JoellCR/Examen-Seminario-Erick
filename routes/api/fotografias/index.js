var express =require('express');
var router = express.Router();
var fileModel =require('../filemodel');

var condCollection =fileModel.getFotografias();

router.get('/',function(req, res){
    res.json({
        "examen":"1",
        "parcial":"1"
    });
});


router.get('/all', function(req,res){
    fotoCollection=fileModel.getFotografias();
    res.json(fotoCollection);
});


module.exports = router;