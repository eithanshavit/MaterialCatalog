/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var FamilyModel = Backbone.Model.extend({
        url: '',

        defaults: {
          name: 'Family'
        }
    });

    return FamilyModel;
});
