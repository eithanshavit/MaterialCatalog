define(["jquery","underscore","backbone","common/global","handlebars","text!templates/materialList.hbs"],function(a,b,c,d,e,f){"use strict";var g=c.View.extend({template:e.compile(f),el:"#main-div",events:{},initialize:function(){this.listenTo(this.model,"sync",this.render)},render:function(){if(d.activeTabView===this){var a;a=this.family?this.model.where({family:this.family}):this.model.models,this.$el.html(this.template({materials:a}))}},activate:function(){d.activeTabView=this},family:null});return g});