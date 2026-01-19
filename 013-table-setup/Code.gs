function ex13_tableSetup() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.setFrozenRows(1);
  const r = sh.getDataRange();
  r.createFilter();
  sh.getRange(1,1,1,sh.getLastColumn()).setFontWeight('bold');
}
