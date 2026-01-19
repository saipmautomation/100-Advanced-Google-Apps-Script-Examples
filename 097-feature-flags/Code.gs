function ex97_featureFlag() {
  const props=PropertiesService.getScriptProperties();
  const enabled = props.getProperty('FEATURE_X') === 'true';
  Logger.log('FEATURE_X enabled? ' + enabled);
}
