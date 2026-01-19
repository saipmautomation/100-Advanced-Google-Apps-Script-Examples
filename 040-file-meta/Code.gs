function ex40_fileMeta() {
  const fileId='PASTE_FILE_ID';
  const f=DriveApp.getFileById(fileId);
  f.setDescription('Updated by Apps Script on ' + new Date());
  f.setStarred(true);
}
