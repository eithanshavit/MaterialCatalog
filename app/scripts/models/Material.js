/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var MaterialModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
          name: 'Product',
          vendor: 'Vendor',
          family: 'Product family',
          castable: false,
          moldable: false,
          etchable: false,
          cuttable: false,
          brushable: false,
          recyclable: false,
          color: 'White',
          opacity: 100,
          flexability: 100,
          toughness: 100,
          durability: 100
        },

        validate: function(attrs, options) {
        },

        configWithGoogleDocsEntry: function(entry) {
            this.name = entry.gsx$product.$t;
        }

    });

    return MaterialModel;
});
