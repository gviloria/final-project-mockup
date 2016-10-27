import { Plants } from '../../api/plants/plants.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const plantSeeds = [
  {
    name: 'Coconut Tree',
    location: 'Campus Center',
    description: 'Newly planted!',
  },
  {
    name: 'Bayur',
    location: 'Student Services',
    description: 'As tall as the building. Old tree.',
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Plants.find().count() === 0) {
  _.each(plantSeeds, function seedPlants(stuff) {
    Plants.insert(stuff);
  });
}