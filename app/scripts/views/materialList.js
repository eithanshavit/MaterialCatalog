/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'common/global',
    'handlebars',
    'text!templates/materialList.hbs'
], function ($, _, Backbone, Global, Handlebars, Template) {
    'use strict';

    var MaterialListView = Backbone.View.extend({
        template: Handlebars.compile(Template),

        el: '#main-div',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'sync', this.render);
        },

        render: function () {
            if (Global.activeTabView === this) {
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
            Global.activeTabView = this;
        },

        family: null
    });

    return MaterialListView;
});
