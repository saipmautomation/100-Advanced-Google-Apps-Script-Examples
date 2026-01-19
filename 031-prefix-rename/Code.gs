function ex31_prefixRename() {
  const folderId='PASTE_FOLDER_ID';
  const prefix='2026-';
  const folder=DriveApp.getFolderById(folderId);
  const files=folder.getFiles();
  while(files.hasNext()){
    const f=files.next();
    if(!f.getName().startsWith(prefix)) f.setName(prefix + f.getName());
  }
}
