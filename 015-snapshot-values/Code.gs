function ex15_snapshotValuesOnly() {
  const ss = SpreadsheetApp.getActive();
  const src = ss.getActiveSheet();
  const snap = ss.insertSheet(`Snapshot ${Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), 'yyyy-MM-dd HH:mm')}`);
  const values = src.getDataRange().getValues();
  snap.getRange(1,1,values.length,values[0].length).setValues(values);
}
