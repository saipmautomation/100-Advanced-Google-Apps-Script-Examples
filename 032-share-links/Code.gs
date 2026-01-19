function ex32_shareLinks() {
  const ids = ['PASTE_FILE_ID_1','PASTE_FILE_ID_2'];
  ids.forEach(id=>{
    const f = DriveApp.getFileById(id);
    f.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    Logger.log(f.getUrl());
  });
}
