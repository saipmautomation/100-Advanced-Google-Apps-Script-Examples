function doPost(e) {
  const ss=SpreadsheetApp.openById('PASTE_SHEET_ID');
  const sh=ss.getSheetByName('WebAppLog')||ss.insertSheet('WebAppLog');
  sh.appendRow([new Date(), e.postData.type, e.postData.contents]);
  return ContentService.createTextOutput('OK');
}
