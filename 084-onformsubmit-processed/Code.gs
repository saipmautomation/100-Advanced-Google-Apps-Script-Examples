function ex84_onFormSubmit(e) {
  const ss=SpreadsheetApp.getActive();
  const sh=ss.getSheetByName('Processed')||ss.insertSheet('Processed');
  sh.appendRow([new Date(), JSON.stringify(e.namedValues)]);
}
