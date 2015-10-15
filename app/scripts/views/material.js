/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'common',
    'handlebars',
    'text!templates/material.hbs'
], function ($, _, Backbone, Common, Handlebars, template) {
    'use strict';

    var MaterialView = Backbone.View.extend({
        template: Handlebars.compile(template),

        el: '#main-div',

        events: {},

        initialize: function () {
            this.listenTo(Common.materials, 'sync', this.render);
        },

        render: function () {
            if (Common.activeTabView === this) {
                if (this.model.isValid()) {
                  this.$el.html(this.template(this.model.attributes));
                }
                else {
                  this.$el.html(this.template({invalid: true}));
                }
            }
        },

        activate: function() {
            Common.activeTabView = this;
        }

    });

    return MaterialView;
});
