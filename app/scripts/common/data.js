/*global define*/
define([
    'models/family',
    'collections/families',
], function (FamilyModel, FamiliesCollection) {
    'use strict';
  return {
    // Global materials collection
    materials: null,

    // Global families collection
    families: new FamiliesCollection([
          new FamilyModel({name: 'שרפים'}),
          new FamilyModel({name: 'חומר טבעי'}),
          new FamilyModel({name: 'כימקאלים'}),
          new FamilyModel({name: 'פגמנטים'}),
          new FamilyModel({name: 'גומי'}),
          new FamilyModel({name: 'דבקים'}),
          new FamilyModel({name: 'חומר בידוד'}),
          new FamilyModel({name: 'מתכות'}),
          new FamilyModel({name: 'ספוגים'}),
          new FamilyModel({name: 'פלסטיק'})
    ])
  };
});
