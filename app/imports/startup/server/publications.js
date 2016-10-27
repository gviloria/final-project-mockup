import { Plants } from '../../api/plants/plants.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Plants', function publishPlantsData() {
  return Plants.find();
});