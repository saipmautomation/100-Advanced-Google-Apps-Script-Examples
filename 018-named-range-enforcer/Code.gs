function ex18_enforceNamedRanges() {
  const ss = SpreadsheetApp.getActive();
  const required = ['INPUTS','OUTPUTS'];
  required.forEach(n=>{
    if (!ss.getRangeByName(n)) throw new Error(`Missing named range: ${n}`);
  });
  Logger.log('All named ranges present');
}
