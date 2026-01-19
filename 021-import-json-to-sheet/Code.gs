function ex21_importJsonToSheet() {
  const url = 'https://httpbin.org/json';
  const json = JSON.parse(UrlFetchApp.fetch(url).getContentText());
  const sh = SpreadsheetApp.getActiveSheet();
  const rows = Object.entries(json).map(([k,v])=>[k, typeof v === 'object' ? JSON.stringify(v) : v]);
  sh.getRange(1,1,rows.length,2).setValues(rows);
}
