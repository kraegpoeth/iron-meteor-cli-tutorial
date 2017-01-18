/*****************************************************************************/
/* EditCar: Event Handlers */
/*****************************************************************************/
Template.EditCar.events({
});

/*****************************************************************************/
/* EditCar: Helpers */
/*****************************************************************************/
Template.EditCar.helpers({
  beforeRemove() {
    return function (collection, id) {
      const doc = collection.findOne(id);
      if (confirm("Delete " + doc.brand + " " + doc.model + "?")) {
        this.remove();
        Router.go('carsList');
      }
    }
  }
});

/*****************************************************************************/
/* EditCar: Lifecycle Hooks */
/*****************************************************************************/
Template.EditCar.onCreated(function () {
});

Template.EditCar.onRendered(function () {
});

Template.EditCar.onDestroyed(function () {
});
