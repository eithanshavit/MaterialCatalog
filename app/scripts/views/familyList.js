/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'common/global',
    'handlebars',
    'text!templates/familyList.hbs'
], function ($, _, Backbone, Global, Handlebars, Template) {
    'use strict';

    var FamiliesView = Backbone.View.extend({
        template: Handlebars.compile(Template),

        el: '#main-div',

        events: {},

        initialize: function () {
        },

        render: function () {
            if (Global.activeTabView === this) {
                this.$el.html(this.template({families: this.model.models}));
            }
        },

        activate: function() {
            Global.activeTabView = this;
        }

    });

    return FamiliesView;
});
