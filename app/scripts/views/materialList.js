/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'common',
    'handlebars',
    'text!templates/materialList.hbs'
], function ($, _, Backbone, Common, Handlebars, template) {
    'use strict';

    var MaterialListView = Backbone.View.extend({
        template: Handlebars.compile(template),

        el: '#main-div',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'sync', this.render);
        },

        render: function () {
            if (Common.activeTabView === this) {
                var filtered;
                if (this.family) {
                    filtered = this.model.where({family: this.family});
                }
                else {
                    filtered = this.model.models;
                }
                this.$el.html(this.template({materials: filtered}));
            }
        },

        activate: function() {
            Common.activeTabView = this;
        },

        family: null
    });

    return MaterialListView;
});
