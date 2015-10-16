define(["underscore","backbone"],function(a,b){"use strict";var c=b.Model.extend({url:"",initialize:function(){},defaults:{id:"XXX",name:"Product",vendor:"Vendor",family:"Product family",castable:!1,moldable:!1,etchable:!1,cuttable:!1,brushable:!1,recyclable:!1,color:"White",opacity:100,flexability:100,toughness:100,durability:100,exists:!1},configWithGoogleDocsEntry:function(a){this.set({name:a.gsx$product.$t,id:a.gsx$id.$t,vendor:a.gsx$vendor.$t,family:a.gsx$family.$t,castable:this.normalizeBool(a.gsx$castable.$t),moldable:this.normalizeBool(a.gsx$moldable.$t),etchable:this.normalizeBool(a.gsx$etchable.$t),cuttable:this.normalizeBool(a.gsx$cuttable.$t),brushable:this.normalizeBool(a.gsx$brushable.$t),recyclable:this.normalizeBool(a.gsx$recyclable.$t),color:a.gsx$color.$t,opacity:a.gsx$opacity.$t,flexability:a.gsx$flexability.$t,thoughness:a.gsx$thoughness.$t,durability:a.gsx$durability.$t,exists:!0})},normalizeBool:function(a){return"x"===a||"לא"===a||"no"===a?!1:a?!0:!1},validate:function(a){return a.exists?void 0:"Can't find model with ID"+a.id}});return c});