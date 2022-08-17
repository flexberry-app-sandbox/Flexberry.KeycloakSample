import { moduleForModel, test } from 'ember-qunit';

moduleForModel('t-v-keycloak-sample-social-network', 'Unit | Model | t-v-keycloak-sample-social-network', {
  // Specify the other units that are required for this test.
  needs: [
    'model:t-v-keycloak-sample-chat-bot-message',
    'model:t-v-keycloak-sample-person-account',
    'model:t-v-keycloak-sample-person-meta-data',
    'model:t-v-keycloak-sample-person',
    'model:t-v-keycloak-sample-request-person-data',
    'model:t-v-keycloak-sample-social-network',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
