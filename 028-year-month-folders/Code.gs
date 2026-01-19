function ex28_yearMonthFolders() {
  const rootId = 'PASTE_ROOT_FOLDER_ID';
  const root = DriveApp.getFolderById(rootId);
  const now = new Date();
  const year = String(now.getFullYear());
  const month = Utilities.formatDate(now, Session.getScriptTimeZone(), 'MM');
  const y = getOrCreateSub_(root, year);
  const m = getOrCreateSub_(y, month);
  Logger.log(m.getUrl());
}
function getOrCreateSub_(parent, name) {
  const it = parent.getFoldersByName(name);
  return it.hasNext() ? it.next() : parent.createFolder(name);
}
