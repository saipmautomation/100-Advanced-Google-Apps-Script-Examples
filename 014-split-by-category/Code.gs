function ex14_splitByCategory() {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getActiveSheet();
  const data = sh.getDataRange().getValues();
  const header = data.shift();
  const catCol = 3; // column C

  const buckets = {};
  data.forEach(r=>{
    const k = String(r[catCol-1]).trim() || 'Uncategorized';
    (buckets[k] ||= []).push(r);
  });

  Object.entries(buckets).forEach(([name,rows])=>{
    const tab = ss.getSheetByName(name) || ss.insertSheet(name);
    tab.clear();
    tab.getRange(1,1,1,header.length).setValues([header]);
    tab.getRange(2,1,rows.length,header.length).setValues(rows);
  });
}
