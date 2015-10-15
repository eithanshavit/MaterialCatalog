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

        url: 'https://spreadsheets.google.com/feeds/list/1E8jvOsdRhM9VnchrcyZmbLrmKA01xRFRanaZ3WAEm_s/od6/public/values?alt=json',

        parse: function(response){
           var entries = response.feed.entry;
           return _.map(entries, function(entry) {
              var m = new MaterialModel();
              m.configWithGoogleDocsEntry(entry);
              return m;
           });
        },
      
        isEmpty: function() {
          return (this.length <= 0);
        }
    });

    return MaterialsCollection;
});
