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
          id: 'XXX',
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
          durability: 100,
          exists: false
        },

        configWithGoogleDocsEntry: function(entry) {
            this.set({
              name:         entry.gsx$product.$t,
              id:           entry.gsx$id.$t,
              vendor:       entry.gsx$vendor.$t,
              family:       entry.gsx$family.$t,
              exists:       true
            });
        },

        validate: function(attrs) {
          if (!attrs.exists) {
            return 'Can\'t find model with ID' + attrs.id;
          }
        }

    });

    return MaterialModel;
});
