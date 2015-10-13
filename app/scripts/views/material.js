/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/materials.hbs'
], function ($, _, Backbone, Handlebars, template) {
    'use strict';

    var MaterialView = Backbone.View.extend({
        template: Handlebars.compile(template),

        el: '#test-div',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'reset', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        },

        addOne: function (material) {
            this.$el.append(this.template(material.toJSON()));
        },

        addAll: function () {
            this.model.each(this.addOne, this);
        },

    });

    return MaterialView;
});
