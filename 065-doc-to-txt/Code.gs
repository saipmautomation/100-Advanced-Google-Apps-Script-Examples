function ex65_docToTxt() {
  const doc=DocumentApp.getActiveDocument();
  const text=doc.getBody().getText();
  const file=DriveApp.createFile(doc.getName()+'.txt', text, MimeType.PLAIN_TEXT);
  Logger.log(file.getUrl());
}
