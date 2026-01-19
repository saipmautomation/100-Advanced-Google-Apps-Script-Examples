function ex12_validateImport() {
  const sh = SpreadsheetApp.getActiveSheet();
  const headers = sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0].map(String);
  const required = ['Email','Name','Status'];
  const missing = required.filter(r=>!headers.includes(r));
  if (missing.length) throw new Error('Missing columns: ' + missing.join(', '));
  Logger.log('Import schema OK');
}
