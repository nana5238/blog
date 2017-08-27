/**
 * Created by nana on 2017/8/26.
 */
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

  res.render('index', {
    title: 'web开发模板'
    ,host : global.appConfig.api.protocol+global.appConfig.api.host
  });


});


module.exports = router;
