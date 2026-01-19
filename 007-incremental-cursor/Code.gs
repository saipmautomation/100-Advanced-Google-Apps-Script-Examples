function ex07_incrementalProcess() {
  const props = PropertiesService.getScriptProperties();
  const startRow = Number(props.getProperty('cursor') || 2);
  const sh = SpreadsheetApp.getActiveSheet();
  const last = sh.getLastRow();
  const batchSize = 200;
  const endRow = Math.min(last, startRow + batchSize - 1);
  if (startRow > last) { props.deleteProperty('cursor'); return; }

  const data = sh.getRange(startRow,1,endRow-startRow+1,sh.getLastColumn()).getValues();
  // do work...
  Logger.log(`Processed rows ${startRow}-${endRow}`);

  props.setProperty('cursor', String(endRow + 1));
}
