import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Plants = new Mongo.Collection('Plants');

/**
 * Create the schema for Plants
 */
export const PlantsSchema = new SimpleSchema({
  name: {
    label: 'name',
    type: String,
    optional: false,
    max: 20,
  },
  location: {
    label: 'location',
    type: String,
    optional: false,
    max: 30,
  },
  description: {
    label: 'description',
    type: String,
    optional: false,
    max: 200,
  }
});

Plants.attachSchema(PlantsSchema);
