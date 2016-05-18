var express = require('express');
var app     = express();
var fs      = require('fs');

var basePath= process.cwd() + '/nullportal-web/views/';
var index   = {};

var nullportal = {

    setup: function () {

        fs.readFile(basePath + 'index.ejs', 'utf8', function (error, data) {
            index = (! error) ? data : '404';
        });

        console.log('[nullportal]:\tSetup Complete');
    },
    getPage: function (req, callback) {

        callback(index);

    }
};

module.exports = nullportal;
