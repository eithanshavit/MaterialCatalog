/*global define*/

define([
    'jquery',
    'backbone',
    'common/data',
    'models/material',
    'views/material',
    'views/materialList',
    'views/familyList',
    'views/loader'
], function ($, Backbone, Data, Material, MaterialDetailView, MaterialListView, FamilyListView, LoaderView) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        routes: {
            '/': 'handleRoot',
            '.': 'handleRoot',
            '': 'handleRoot',
            'materials/:familyName': 'handleMaterialList',
            'materials/': 'handleMaterialList',
            'materials': 'handleMaterialList',
            'material/:materialId': 'handleMaterialDetail'
        },

        initialize: function() {
        },

        handleRoot: function() {
            var view = new FamilyListView({model: Data.families});
            view.activate();
            view.render();
        },

        handleMaterialList: function(params) {
            var family = params;
            var view = new MaterialListView({model: Data.materials});
            view.family = family;
            view.activate();
            if (!this.maybeDisplayLoader()) {
              view.render();
            }
        },

        handleMaterialDetail: function(params) {
            var id = params;
            var material = Data.materials.get(id);
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
            Data.materials.add(model);
        },

        maybeDisplayLoader: function() {
          if (Data.materials.isEmpty()) {
            var view = new LoaderView();
            view.render();
            return true;
          }
          return false;
        }

    });

    return RouterRouter;
});
