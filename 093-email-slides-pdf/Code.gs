function ex93_emailSlidesPdf() {
  const presId='PASTE_SLIDES_ID';
  const file=DriveApp.getFileById(presId);
  const pdf=file.getBlob().getAs(MimeType.PDF).setName(file.getName()+'.pdf');
  GmailApp.sendEmail('someone@example.com','Slides PDF','Attached.',{attachments:[pdf]});
}
