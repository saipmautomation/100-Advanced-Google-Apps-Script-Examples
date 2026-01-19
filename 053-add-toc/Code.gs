function ex53_addTOC() {
  const body=DocumentApp.getActiveDocument().getBody();
  body.insertTableOfContents(0);
}
