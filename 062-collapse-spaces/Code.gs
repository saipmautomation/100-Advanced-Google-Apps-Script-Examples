function ex62_collapseSpaces() {
  const t=DocumentApp.getActiveDocument().getBody().editAsText();
  t.replaceText('\\s{2,}', ' ');
}
