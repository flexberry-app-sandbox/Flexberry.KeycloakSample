import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ChatMessageTypeEnum from '../enums/t-v-keycloak-sample-chat-message-type';

export default FlexberryEnum.extend({
  enum: ChatMessageTypeEnum,
  sourceType: 'TV.KeycloakSample.ChatMessageType'
});
