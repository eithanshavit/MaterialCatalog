/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/loader.hbs'
], function ($, _, Backbone, Handlebars, template) {
    'use strict';

    var MaterialView = Backbone.View.extend({
        template: Handlebars.compile(template),

        el: '#main-div',

        events: {},

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());
        },

    });

    return MaterialView;
});
