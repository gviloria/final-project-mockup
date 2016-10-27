import { Template } from 'meteor/templating';
import { Plants } from '../../api/plants/plants.js';

Template.Plant_Index_Page.helpers({

  /**
   * @returns {*} All of the Plants documents.
   */
  plantsList() {
    return Plants.find();
  },
});

Template.Plant_Index_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Plants');
  });
});