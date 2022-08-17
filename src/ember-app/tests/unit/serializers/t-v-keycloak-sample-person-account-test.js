import { moduleForModel, test } from 'ember-qunit';

moduleForModel('t-v-keycloak-sample-person-account', 'Unit | Serializer | t-v-keycloak-sample-person-account', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:t-v-keycloak-sample-person-account',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:t-v-keycloak-sample-chat-message-type',
    'transform:t-v-keycloak-sample-data-type',
    'transform:t-v-keycloak-sample-sex',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
