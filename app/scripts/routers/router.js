/*global define*/

define([
    'jquery',
    'backbone',
    'common',
    'models/material',
    'views/material',
    'views/materialList',
    'views/loader'
], function ($, Backbone, Common, Material, MaterialDetailView, MaterialListView, LoaderView) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        routes: {
            'materials/:familyName': 'handleMaterialList',
            'materials/': 'handleMaterialList',
            'materials': 'handleMaterialList',
            'material/:materialId': 'handleMaterialDetail'
        },

        initialize: function() {
        },

        handleMaterialList: function(params) {
            var family = params;
            console.log(family);
            var view = new MaterialListView({model: Common.materials});
            view.family = family;
            view.activate();
            if (!this.maybeDisplayLoader()) {
              view.render();
            }
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
