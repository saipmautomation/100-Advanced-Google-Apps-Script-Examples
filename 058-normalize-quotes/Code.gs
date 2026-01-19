function ex58_normalizeQuotes() {
  const body=DocumentApp.getActiveDocument().getBody();
  const t=body.editAsText();
  t.replaceText('[“”]', '"');
  t.replaceText("[‘’]", "'");
}
