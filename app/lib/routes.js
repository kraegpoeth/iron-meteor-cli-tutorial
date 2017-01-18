Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/cars', {
  name: 'carsList',
  controller: 'CarsController',
  where: 'client',
  action: 'list'
});


Router.route('/cars/create', {
  name: 'createCar',
  controller: 'CarsController',
  where: 'client',
  action: 'create'
});

Router.route('/cars/:_id', {
  name: 'editCar',
  controller: 'CarsController',
  where: 'client',
  action: 'edit'
});
