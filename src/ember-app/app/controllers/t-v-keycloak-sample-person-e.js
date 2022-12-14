import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 't-v-keycloak-sample-person-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 't-v-keycloak-sample-person-account+socialNetwork':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'socialNetwork',
            projection: 'SocialNetworkL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
