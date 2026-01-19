function ex22_safeWriteByHeaders() {
  const sh = SpreadsheetApp.getActiveSheet();
  const headers = sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0];
  const expected = ['ID','Name','Status'];
  if (expected.join('|') !== headers.slice(0,3).join('|')) throw new Error('Header mismatch.');
  sh.getRange(2,1,1,3).setValues([[1,'Test','OK']]);
}
