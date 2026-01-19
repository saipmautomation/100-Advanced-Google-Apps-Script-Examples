function ex99_loadConfigFromSheet() {
  const ss=SpreadsheetApp.getActive();
  const sh=ss.getSheetByName('Config');
  if(!sh) throw new Error('Missing Config sheet');
  const rows=sh.getRange(2,1,sh.getLastRow()-1,2).getValues();
  const cfg={};
  rows.forEach(([k,v])=>{ if(k) cfg[String(k).trim()] = String(v ?? '').trim(); });
  Logger.log(cfg);
  return cfg;
}
