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
              castable:     this.normalizeBool(entry.gsx$castable.$t),
              moldable:     this.normalizeBool(entry.gsx$moldable.$t),
              etchable:     this.normalizeBool(entry.gsx$etchable.$t),
              cuttable:     this.normalizeBool(entry.gsx$cuttable.$t),
              brushable:    this.normalizeBool(entry.gsx$brushable.$t),
              recyclable:   this.normalizeBool(entry.gsx$recyclable.$t),
              color:        entry.gsx$color.$t,
              opacity:      entry.gsx$opacity.$t,
              flexability:  entry.gsx$flexability.$t,
              thoughness:    entry.gsx$thoughness.$t,
              durability:   entry.gsx$durability.$t,
              exists:       true
            });
        },

        normalizeBool: function(value) {
            if (value === 'x' || value === 'לא' || value === 'no') {
                return false
            }
            if (value) {
              return true
            }
            return false
        },

        validate: function(attrs) {
          if (!attrs.exists) {
            return 'Can\'t find model with ID' + attrs.id;
          }
        }

    });

    return MaterialModel;
});
