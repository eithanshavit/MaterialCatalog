/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/materialList.hbs'
], function ($, _, Backbone, Handlebars, template) {
    'use strict';

    var MaterialListView = Backbone.View.extend({
        template: Handlebars.compile(template),

        el: '#test-div',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'reset', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model));
        },

        family: null
    });

    return MaterialListView;
});
