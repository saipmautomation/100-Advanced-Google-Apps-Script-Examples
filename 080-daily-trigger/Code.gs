function ex80_createDailyTrigger() {
  ScriptApp.newTrigger('ex68_archiveSender').timeBased().everyDays(1).atHour(7).create();
}
