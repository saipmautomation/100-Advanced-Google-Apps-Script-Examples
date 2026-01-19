function ex03_buildIndexMap() {
  const sh = SpreadsheetApp.getActiveSheet();
  const vals = sh.getRange(2,1,sh.getLastRow()-1,1).getValues().flat();
  const map = {};
  vals.forEach((v,i)=> { const k=String(v).trim(); if(k) map[k]=i+2; });
  Logger.log(map);
}
