/*global define*/

define([
    'underscore',
    'backbone',
    'models/family'
], function (_, Backbone, FamilyModel) {
    'use strict';

    var FamiliesCollection = Backbone.Collection.extend({
        defaults: {
            model: FamilyModel
        },

        model: FamilyModel,
    });

    return FamiliesCollection;
});
