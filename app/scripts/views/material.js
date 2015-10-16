/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'common/global',
    'common/data',
    'handlebars',
    'text!templates/material.hbs'
], function ($, _, Backbone, Global, Data, Handlebars, Template) {
    'use strict';

    var MaterialView = Backbone.View.extend({
        template: Handlebars.compile(Template),

        el: '#main-div',

        events: {},

        initialize: function () {
            this.listenTo(Data.materials, 'sync', this.render);
        },

        render: function () {
            if (Global.activeTabView === this) {
                if (this.model.isValid()) {
                  this.$el.html(this.template(this.model.attributes));
                }
                else {
                  this.$el.html(this.template({invalid: true}));
                }
            }
        },

        activate: function() {
            Global.activeTabView = this;
        }

    });

    return MaterialView;
});
