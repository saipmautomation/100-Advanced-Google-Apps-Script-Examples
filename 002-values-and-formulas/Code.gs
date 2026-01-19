function ex02_valuesAndFormulas() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.getRange('A1:B1').setValues([['Item','Total']]);
  sh.getRange('B2:B').setFormulaR1C1('=IF(RC[-1]="","",LEN(RC[-1]))');
}
