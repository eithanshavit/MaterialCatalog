define(["jquery","underscore","backbone","common/global","common/data","handlebars","text!templates/material.hbs"],function(a,b,c,d,e,f,g){"use strict";var h=c.View.extend({template:f.compile(g),el:"#main-div",events:{},initialize:function(){this.listenTo(e.materials,"sync",this.render)},render:function(){d.activeTabView===this&&(this.model.isValid()?this.$el.html(this.template(this.model.attributes)):this.$el.html(this.template({invalid:!0})))},activate:function(){d.activeTabView=this}});return h});