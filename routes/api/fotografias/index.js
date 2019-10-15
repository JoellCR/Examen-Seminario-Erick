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


//METODO GET
router.get('/all', function(req,res){
    fotoCollection=fileModel.getFotografias();
    res.json(fotoCollection);
});


//METODO POST
router.post('/new', function(req,res){
    fotoCollection=fileModel.getFotografias();
    var newFotografias=Object.assign(
        {},
        req.body,
        {
            "title":(req.body.ttle),
            "url": (req.body.url),
            "thumbnailUrl": (res.body.thumbnailUrl),
            "album": (req.body.album)
        }
    );
    var fotoExist=fotoCollection.find(
        function(o,i){
            return o.codigo===newFotografias.codigo;
        }
    )
    if(!fotoExist){
        fotoCollection.push(newFotografias);
        fileModel.setFotografias(
            fotoCollection,
            function(err, savedSuccesfully){
                if(err){
                    res.status(400).json({"Error en el aplicativo":"Error"});
                }else{
                    res.json(newFotografias);
                }
            }
            );

    }else{
        res.status(400).json({"Error en el aplicativo":"Error"});
    }

});

module.exports = router;