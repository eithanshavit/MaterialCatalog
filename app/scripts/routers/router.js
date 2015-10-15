/*global define*/

define([
    'jquery',
    'backbone',
    'common',
    'models/material',
    'views/material',
    'views/loader'
], function ($, Backbone, Common, Material, MaterialDetailView, LoaderView) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        routes: {
            'material': 'handleMaterialList',
            'material/:materialId': 'handleMaterialDetail'
        },

        initialize: function() {
        },

        handleMaterialDetail: function(params) {
            var id = params;
            var material = Common.materials.get(id);
            var model;
            if (material === undefined) {
              model = new Material({id: id});
            }
            else {
              model = material;
            }
            var view = new MaterialDetailView({model: model});
            view.activate();
            if (!this.maybeDisplayLoader()) {
              view.render();
            }
            Common.materials.add(model);
        },

        maybeDisplayLoader: function() {
          if (Common.materials.isEmpty()) {
            var view = new LoaderView();
            view.render();
            return true;
          }
          return false;
        }

    });

    return RouterRouter;
});
