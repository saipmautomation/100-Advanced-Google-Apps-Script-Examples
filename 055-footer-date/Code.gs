function ex55_footer() {
  const doc=DocumentApp.getActiveDocument();
  const footer=doc.addFooter();
  footer.appendParagraph('Generated: ' + new Date().toDateString());
}
