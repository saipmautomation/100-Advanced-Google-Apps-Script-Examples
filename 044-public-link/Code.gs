function ex44_publicLink() {
  const fileId='PASTE_FILE_ID';
  const f=DriveApp.getFileById(fileId);
  f.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  Logger.log(f.getUrl());
}
