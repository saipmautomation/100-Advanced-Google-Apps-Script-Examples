function ex43_replaceFileInFolder() {
  const folderId='PASTE_FOLDER_ID';
  const folder=DriveApp.getFolderById(folderId);
  const name='current-report.pdf';
  const existing=folder.getFilesByName(name);
  while(existing.hasNext()) existing.next().setTrashed(true);
  folder.createFile(Utilities.newBlob('new content','text/plain',name));
}
