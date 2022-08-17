import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  accountId: DS.attr('string'),
  socialNetwork: DS.belongsTo('t-v-keycloak-sample-social-network', { inverse: null, async: false }),
  person: DS.belongsTo('t-v-keycloak-sample-person', { inverse: 'personAccount', async: false })
});

export let ValidationRules = {
  accountId: {
    descriptionKey: 'models.t-v-keycloak-sample-person-account.validations.accountId.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  socialNetwork: {
    descriptionKey: 'models.t-v-keycloak-sample-person-account.validations.socialNetwork.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  person: {
    descriptionKey: 'models.t-v-keycloak-sample-person-account.validations.person.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PersonAccountE', 't-v-keycloak-sample-person-account', {
    accountId: attr('Account id', { index: 0 }),
    socialNetwork: belongsTo('t-v-keycloak-sample-social-network', 'Social network', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
