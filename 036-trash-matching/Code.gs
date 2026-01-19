function ex36_trashMatching() {
  const folderId='PASTE_FOLDER_ID';
  const pattern=/^tmp_/i;
  const files=DriveApp.getFolderById(folderId).getFiles();
  while(files.hasNext()){
    const f=files.next();
    if(pattern.test(f.getName())) f.setTrashed(true);
  }
}
