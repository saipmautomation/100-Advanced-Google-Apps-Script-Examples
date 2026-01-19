function ex71_saveAttachments() {
  const folderId='PASTE_FOLDER_ID';
  const folder=DriveApp.getFolderById(folderId);
  const threads=GmailApp.search('has:attachment newer_than:7d',0,20);
  threads.forEach(t=>{
    t.getMessages().forEach(m=>{
      m.getAttachments().forEach(a=>folder.createFile(a));
    });
  });
}
