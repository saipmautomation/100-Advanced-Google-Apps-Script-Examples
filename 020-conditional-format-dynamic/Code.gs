function ex20_conditionalFormattingDynamic() {
  const sh = SpreadsheetApp.getActiveSheet();
  const rng = sh.getRange(2,4,Math.max(1,sh.getLastRow()-1),1); // column D from row 2
  const rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextContains('ERROR')
    .setBackground('#ffe4e6')
    .setRanges([rng]).build();
  sh.setConditionalFormatRules([...sh.getConditionalFormatRules(), rule]);
}
