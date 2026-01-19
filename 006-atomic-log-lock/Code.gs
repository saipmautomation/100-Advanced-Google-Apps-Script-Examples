function ex06_atomicLog() {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sh = SpreadsheetApp.getActive().getSheetByName('Logs') || SpreadsheetApp.getActive().insertSheet('Logs');
    sh.appendRow([new Date(), Session.getActiveUser().getEmail(), 'Event']);
  } finally {
    lock.releaseLock();
  }
}
