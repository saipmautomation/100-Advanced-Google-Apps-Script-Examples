function ex24_dashboardKpis() {
  const ss = SpreadsheetApp.getActive();
  const dataSh = ss.getActiveSheet();
  const dash = ss.getSheetByName('Dashboard') || ss.insertSheet('Dashboard');
  const last = dataSh.getLastRow();
  const total = Math.max(0, last-1);
  const unique = new Set(dataSh.getRange(2,1,total,1).getValues().flat().map(v=>String(v).trim()).filter(Boolean)).size;
  const out = [['Metric','Value'],['Total rows', total],['Unique IDs (col A)', unique],['Updated', new Date()]];
  dash.clear();
  dash.getRange(1,1,out.length,2).setValues(out);
  dash.getRange('A1:B1').setFontWeight('bold');
}
