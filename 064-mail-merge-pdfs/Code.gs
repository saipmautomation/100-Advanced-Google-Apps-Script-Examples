function ex64_mailMergeToPdfs() {
  const templateId='PASTE_TEMPLATE_DOC_ID';
  const folderId='PASTE_OUTPUT_FOLDER_ID';
  const sh=SpreadsheetApp.getActiveSheet();
  const rows=sh.getDataRange().getValues();
  const header=rows.shift();

  rows.forEach(r=>{
    const map={}; header.forEach((h,i)=>map[`{{${h}}}`]=String(r[i] ?? ''));
    const copy=DriveApp.getFileById(templateId).makeCopy('Letter - ' + (r[0]||'Recipient'));
    const doc=DocumentApp.openById(copy.getId());
    const body=doc.getBody();
    Object.entries(map).forEach(([k,v])=>body.replaceText(k,v));
    doc.saveAndClose();

    const pdf=DriveApp.getFileById(copy.getId()).getBlob().getAs(MimeType.PDF).setName(copy.getName()+'.pdf');
    DriveApp.getFolderById(folderId).createFile(pdf);
    copy.setTrashed(true);
  });
}
