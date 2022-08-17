import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import TVKeycloakSampleChatBotMessageLForm from './forms/t-v-keycloak-sample-chat-bot-message-l';
import TVKeycloakSamplePersonLForm from './forms/t-v-keycloak-sample-person-l';
import TVKeycloakSamplePersonMetaDataLForm from './forms/t-v-keycloak-sample-person-meta-data-l';
import TVKeycloakSampleRequestPersonDataLForm from './forms/t-v-keycloak-sample-request-person-data-l';
import TVKeycloakSampleSocialNetworkLForm from './forms/t-v-keycloak-sample-social-network-l';
import TVKeycloakSampleChatBotMessageEForm from './forms/t-v-keycloak-sample-chat-bot-message-e';
import TVKeycloakSamplePersonEForm from './forms/t-v-keycloak-sample-person-e';
import TVKeycloakSamplePersonMetaDataEForm from './forms/t-v-keycloak-sample-person-meta-data-e';
import TVKeycloakSampleRequestPersonDataEForm from './forms/t-v-keycloak-sample-request-person-data-e';
import TVKeycloakSampleSocialNetworkEForm from './forms/t-v-keycloak-sample-social-network-e';
import TVKeycloakSampleChatBotMessageModel from './models/t-v-keycloak-sample-chat-bot-message';
import TVKeycloakSamplePersonAccountModel from './models/t-v-keycloak-sample-person-account';
import TVKeycloakSamplePersonMetaDataModel from './models/t-v-keycloak-sample-person-meta-data';
import TVKeycloakSamplePersonModel from './models/t-v-keycloak-sample-person';
import TVKeycloakSampleRequestPersonDataModel from './models/t-v-keycloak-sample-request-person-data';
import TVKeycloakSampleSocialNetworkModel from './models/t-v-keycloak-sample-social-network';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    't-v-keycloak-sample-chat-bot-message': TVKeycloakSampleChatBotMessageModel,
    't-v-keycloak-sample-person-account': TVKeycloakSamplePersonAccountModel,
    't-v-keycloak-sample-person-meta-data': TVKeycloakSamplePersonMetaDataModel,
    't-v-keycloak-sample-person': TVKeycloakSamplePersonModel,
    't-v-keycloak-sample-request-person-data': TVKeycloakSampleRequestPersonDataModel,
    't-v-keycloak-sample-social-network': TVKeycloakSampleSocialNetworkModel
  },

  'application-name': 'Metaverse',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Metaverse',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Metaverse',
          title: 'Metaverse'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        metaverse: {
          caption: 'Metaverse',
          title: 'Metaverse',
          't-v-keycloak-sample-chat-bot-message-l': {
            caption: 'Chat bot message',
            title: ''
          },
          't-v-keycloak-sample-request-person-data-l': {
            caption: 'Request person data',
            title: ''
          },
          't-v-keycloak-sample-social-network-l': {
            caption: 'Social network',
            title: ''
          },
          't-v-keycloak-sample-person-meta-data-l': {
            caption: 'Person meta data',
            title: ''
          },
          't-v-keycloak-sample-person-l': {
            caption: 'Person',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    't-v-keycloak-sample-chat-bot-message-l': TVKeycloakSampleChatBotMessageLForm,
    't-v-keycloak-sample-person-l': TVKeycloakSamplePersonLForm,
    't-v-keycloak-sample-person-meta-data-l': TVKeycloakSamplePersonMetaDataLForm,
    't-v-keycloak-sample-request-person-data-l': TVKeycloakSampleRequestPersonDataLForm,
    't-v-keycloak-sample-social-network-l': TVKeycloakSampleSocialNetworkLForm,
    't-v-keycloak-sample-chat-bot-message-e': TVKeycloakSampleChatBotMessageEForm,
    't-v-keycloak-sample-person-e': TVKeycloakSamplePersonEForm,
    't-v-keycloak-sample-person-meta-data-e': TVKeycloakSamplePersonMetaDataEForm,
    't-v-keycloak-sample-request-person-data-e': TVKeycloakSampleRequestPersonDataEForm,
    't-v-keycloak-sample-social-network-e': TVKeycloakSampleSocialNetworkEForm
  },

});

export default translations;
