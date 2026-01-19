function ex100_pipeline() {
  const ss=SpreadsheetApp.getActive();
  const sh=ss.getSheetByName('API Data')||ss.insertSheet('API Data');
  const json=JSON.parse(UrlFetchApp.fetch('https://httpbin.org/json').getContentText());

  const rows=Object.entries(json).map(([k,v])=>[k, typeof v==='object'?JSON.stringify(v):v]);
  sh.clear();
  sh.getRange(1,1,rows.length,2).setValues(rows);

  const summary = `Loaded ${rows.length} keys into "${sh.getName()}" at ${new Date().toISOString()}`;
  GmailApp.sendEmail(Session.getActiveUser().getEmail(),'Pipeline Complete', summary);
}
