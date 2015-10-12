/*global define*/

define([
    'underscore',
    'backbone',
    'models/material'
], function (_, Backbone, MaterialModel) {
    'use strict';

    var MaterialsCollection = Backbone.Collection.extend({
        defaults: {
            model: MaterialModel
        },

        model: MaterialModel,

        url: 'data/materials.json',

        parse: function(response){
           return response;
        }
    });

    return MaterialsCollection;
});
