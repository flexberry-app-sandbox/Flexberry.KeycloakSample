import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  body: DS.attr('string'),
  result: DS.attr('string'),
  person: DS.belongsTo('t-v-keycloak-sample-person', { inverse: null, async: false })
});

export let ValidationRules = {
  body: {
    descriptionKey: 'models.t-v-keycloak-sample-request-person-data.validations.body.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  result: {
    descriptionKey: 'models.t-v-keycloak-sample-request-person-data.validations.result.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  person: {
    descriptionKey: 'models.t-v-keycloak-sample-request-person-data.validations.person.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RequestPersonDataE', 't-v-keycloak-sample-request-person-data', {
    body: attr('Body', { index: 0 }),
    result: attr('Result', { index: 1 }),
    person: belongsTo('t-v-keycloak-sample-person', 'Person', {
      esiaId: attr('Esia id', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'esiaId' })
  });

  modelClass.defineProjection('RequestPersonDataL', 't-v-keycloak-sample-request-person-data', {
    body: attr('Body', { index: 0 }),
    result: attr('Result', { index: 1 }),
    person: belongsTo('t-v-keycloak-sample-person', 'Esia id', {
      esiaId: attr('Esia id', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
