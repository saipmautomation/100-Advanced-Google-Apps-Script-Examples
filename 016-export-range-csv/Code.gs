function ex16_exportRangeToCsv() {
  const sh = SpreadsheetApp.getActiveSheet();
  const values = sh.getRange('A1:D20').getValues();
  const csv = values.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
  const file = DriveApp.createFile('export.csv', csv, MimeType.CSV);
  Logger.log(file.getUrl());
}
