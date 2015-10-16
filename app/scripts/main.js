/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        handlebars: '../bower_components/handlebars/handlebars',
        text: '../bower_components/requirejs-text/text'
    }
});

require([
    'backbone',
    'common/data',
    'routers/router',
    'handlebars',
    'views/materialList',
    'collections/materials'
], function (Backbone, Data, Router, Handlebars, MaterialListView, MaterialsList) {
    Data.materials = new MaterialsList();
    Data.materials.fetch();
    new Router();
    Backbone.history.start();
});
