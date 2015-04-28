'use strict';

var dataTable = {
  view: 'datatable',
  id: 'datatable',
  autoConfig: true,  // infer columns from data
  select: true,
  sortable: true,
  editable: true, editaction: 'dblclick',
  resizeColumn: true,
  url:  webix.proxy('meteor', Movies),  // <-- this is it!
  save: webix.proxy('meteor', Movies)   // Mongo.Collection
};

Meteor.startup(function () {

  var webixContainer = webix.ui({
    container: 'webix-playground',
    view: 'layout',
    rows: [
      dataTable
    ]
  });

  console.log('The DataTable is reactive. Try `Movies.insert({title: "Star Wars"})`');

});
