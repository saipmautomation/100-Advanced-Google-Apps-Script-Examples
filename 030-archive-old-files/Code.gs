function ex30_archiveOldFiles() {
  const folderId = 'PASTE_FOLDER_ID';
  const archiveId = 'PASTE_ARCHIVE_FOLDER_ID';
  const days = 30;
  const cutoff = Date.now() - days*24*3600*1000;

  const src = DriveApp.getFolderById(folderId);
  const archive = DriveApp.getFolderById(archiveId);
  const files = src.getFiles();
  while (files.hasNext()) {
    const f = files.next();
    if (f.getLastUpdated().getTime() < cutoff) {
      archive.addFile(f);
      src.removeFile(f);
    }
  }
}
