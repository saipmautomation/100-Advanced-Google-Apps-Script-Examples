function ex23_deleteRowsIfBlankColB() {
  const sh = SpreadsheetApp.getActiveSheet();
  const last = sh.getLastRow();
  const vals = sh.getRange(2,2,last-1,1).getValues().flat();
  for (let i=vals.length-1;i>=0;i--) if (!String(vals[i]).trim()) sh.deleteRow(i+2);
}
