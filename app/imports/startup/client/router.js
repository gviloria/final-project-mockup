import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/faq', {
  name: 'Questions_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Questions_Page' });
  },
});

FlowRouter.route('/plant-map', {
  name: 'Plant_Map_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Plant_Map_Page' });
  },
});

FlowRouter.route('/plant-index', {
  name: 'Plant_Index_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Plant_Index_Page' });
  },
});

FlowRouter.route('/add-plant', {
  name: 'Add_Plant_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Plant_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
