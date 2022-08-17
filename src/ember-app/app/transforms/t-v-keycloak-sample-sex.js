import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import SexEnum from '../enums/t-v-keycloak-sample-sex';

export default FlexberryEnum.extend({
  enum: SexEnum,
  sourceType: 'TV.KeycloakSample.Sex'
});
