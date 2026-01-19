function ex33_exportDocPdfToFolder() {
  const docId='PASTE_DOC_ID', folderId='PASTE_FOLDER_ID';
  const file=DriveApp.getFileById(docId);
  const pdf=file.getBlob().getAs(MimeType.PDF).setName(file.getName()+'.pdf');
  DriveApp.getFolderById(folderId).createFile(pdf);
}
