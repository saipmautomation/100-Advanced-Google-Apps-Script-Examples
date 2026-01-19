function ex46_sheetToDocReport() {
  const sh=SpreadsheetApp.getActiveSheet();
  const data=sh.getDataRange().getValues();
  const doc=DocumentApp.create('Sheet Report');
  const body=doc.getBody();
  body.appendParagraph('Report').setHeading(DocumentApp.ParagraphHeading.HEADING1);
  data.slice(1).forEach(r=> body.appendParagraph(`• ${r[0]} — ${r[1]}`));
  Logger.log(doc.getUrl());
}
