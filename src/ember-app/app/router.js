import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('t-v-keycloak-sample-chat-bot-message-l');
  this.route('t-v-keycloak-sample-chat-bot-message-e',
  { path: 't-v-keycloak-sample-chat-bot-message-e/:id' });
  this.route('t-v-keycloak-sample-chat-bot-message-e.new',
  { path: 't-v-keycloak-sample-chat-bot-message-e/new' });
  this.route('t-v-keycloak-sample-person-l');
  this.route('t-v-keycloak-sample-person-e',
  { path: 't-v-keycloak-sample-person-e/:id' });
  this.route('t-v-keycloak-sample-person-e.new',
  { path: 't-v-keycloak-sample-person-e/new' });
  this.route('t-v-keycloak-sample-person-meta-data-l');
  this.route('t-v-keycloak-sample-person-meta-data-e',
  { path: 't-v-keycloak-sample-person-meta-data-e/:id' });
  this.route('t-v-keycloak-sample-person-meta-data-e.new',
  { path: 't-v-keycloak-sample-person-meta-data-e/new' });
  this.route('t-v-keycloak-sample-request-person-data-l');
  this.route('t-v-keycloak-sample-request-person-data-e',
  { path: 't-v-keycloak-sample-request-person-data-e/:id' });
  this.route('t-v-keycloak-sample-request-person-data-e.new',
  { path: 't-v-keycloak-sample-request-person-data-e/new' });
  this.route('t-v-keycloak-sample-social-network-l');
  this.route('t-v-keycloak-sample-social-network-e',
  { path: 't-v-keycloak-sample-social-network-e/:id' });
  this.route('t-v-keycloak-sample-social-network-e.new',
  { path: 't-v-keycloak-sample-social-network-e/new' });
});

export default Router;
