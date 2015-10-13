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
    'handlebars',
    'views/material',
    'collections/materials'
], function (Backbone, Handlebars, MaterialView, MaterialsCollection) {
    Backbone.history.start();
    var c = new MaterialsCollection();
    c.fetch({reset: true});
    var view = new MaterialView({model: c});
    view.render();
});
