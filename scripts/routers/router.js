define(["jquery","backbone","common/data","models/material","views/material","views/materialList","views/familyList","views/loader"],function(a,b,c,d,e,f,g,h){"use strict";var i=b.Router.extend({routes:{"/":"handleRoot",".":"handleRoot","":"handleRoot","materials/:familyName":"handleMaterialList","materials/":"handleMaterialList",materials:"handleMaterialList","material/:materialId":"handleMaterialDetail"},initialize:function(){},handleRoot:function(){var a=new g({model:c.families});a.activate(),a.render()},handleMaterialList:function(a){var b=a,d=new f({model:c.materials});d.family=b,d.activate(),this.maybeDisplayLoader()||d.render()},handleMaterialDetail:function(a){var b,f=a,g=c.materials.get(f);b=void 0===g?new d({id:f}):g;var h=new e({model:b});h.activate(),this.maybeDisplayLoader()||h.render(),c.materials.add(b)},maybeDisplayLoader:function(){if(c.materials.isEmpty()){var a=new h;return a.render(),!0}return!1}});return i});