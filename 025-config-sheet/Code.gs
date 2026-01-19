function ex25_configSheet() {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName('Config') || ss.insertSheet('Config');
  const out = [['Key','Value'],['ENV','dev'],['MAX_BATCH','200'],['LAST_RUN', new Date().toISOString()]];
  sh.clear(); sh.getRange(1,1,out.length,2).setValues(out);
}
