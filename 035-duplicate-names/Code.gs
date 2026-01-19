function ex35_duplicateNamesInFolder() {
  const folderId='PASTE_FOLDER_ID';
  const files=DriveApp.getFolderById(folderId).getFiles();
  const map = {};
  while(files.hasNext()){
    const f=files.next();
    (map[f.getName()] ||= []).push(f.getId());
  }
  const dupes = Object.entries(map).filter(([,ids])=>ids.length>1);
  Logger.log(dupes);
}
