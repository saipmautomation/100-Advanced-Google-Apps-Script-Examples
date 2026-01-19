function ex19_createWeeklyTabs() {
  const ss = SpreadsheetApp.getActive();
  const tz = ss.getSpreadsheetTimeZone();
  for (let i=0;i<4;i++){
    const d = new Date(Date.now() + i*7*24*3600*1000);
    const name = 'Week ' + Utilities.formatDate(d, tz, 'YYYY-ww');
    if (!ss.getSheetByName(name)) ss.insertSheet(name);
  }
}
