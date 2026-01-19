function ex04_upsertByKey() {
  const sh = SpreadsheetApp.getActiveSheet();
  const keyCol = 1;
  const key = 'ABC-123';
  const payload = ['ABC-123','New Name', new Date()];
  const data = sh.getDataRange().getValues();
  const idx = data.findIndex((r,i)=> i>0 && String(r[keyCol-1]).trim()===key);
  if (idx > -1) sh.getRange(idx+1,1,1,payload.length).setValues([payload]);
  else sh.appendRow(payload);
}
