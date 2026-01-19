function ex34_driveInventoryToSheet() {
  const folderId='PASTE_FOLDER_ID';
  const sh=SpreadsheetApp.getActiveSheet();
  const out=[['Name','MimeType','Size','URL','Last Updated']];
  const files=DriveApp.getFolderById(folderId).getFiles();
  while(files.hasNext()){
    const f=files.next();
    out.push([f.getName(), f.getMimeType(), f.getSize(), f.getUrl(), f.getLastUpdated()]);
  }
  sh.clear();
  sh.getRange(1,1,out.length,out[0].length).setValues(out);
}
