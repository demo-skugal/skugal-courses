(function(){
    'use strict';
    const express = require('express');
    const app = express();
    const request = require('request');
    app.set('views', __dirname + '/public');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: !0
    }));
    app.use(express.static(__dirname + '/public'));
    app.use('/images', express.static(__dirname + '/public/images'));
    app.use('/css', express.static(__dirname + '/public/assets/css'));
    app.get('/', function(req, res) {
        res.render('index.ejs')
      });
    const PORT = process.env.PORT || 3100;
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
        console.log('Press Ctrl+C to quit.')
    });
    })();