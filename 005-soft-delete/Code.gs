function ex05_softDelete() {
  const sh = SpreadsheetApp.getActiveSheet();
  const row = 5;
  sh.getRange(row, sh.getLastColumn()+1).setValue('DELETED').setNote('Soft deleted ' + new Date());
}
