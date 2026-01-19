function ex72_csvAttachmentToSheet() {
  const threads=GmailApp.search('filename:csv newer_than:7d',0,5);
  if(!threads.length) return;
  const att=threads[0].getMessages()[0].getAttachments().find(a=>a.getContentType().includes('csv'));
  const csv=att.getDataAsString();
  const rows=Utilities.parseCsv(csv);
  const ss=SpreadsheetApp.create('Imported CSV ' + new Date().toISOString());
  ss.getSheets()[0].getRange(1,1,rows.length,rows[0].length).setValues(rows);
  Logger.log(ss.getUrl());
}
