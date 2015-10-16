/*global define*/

define([
    'underscore',
    'backbone',
    'common/global',
    'models/material'
], function (_, Backbone, Global, MaterialModel) {
    'use strict';

    var MaterialsCollection = Backbone.Collection.extend({
        defaults: {
            model: MaterialModel
        },

        model: MaterialModel,

        url: Global.DATA_URL,

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
