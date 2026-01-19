function ex79_threadToDoc() {
  const thread=GmailApp.search('newer_than:7d',0,1)[0];
  if(!thread) return;
  const doc=DocumentApp.create('Email Thread Summary');
  const body=doc.getBody();
  thread.getMessages().forEach(m=>{
    body.appendParagraph(m.getFrom()).setHeading(DocumentApp.ParagraphHeading.HEADING2);
    body.appendParagraph(m.getDate().toString());
    body.appendParagraph(m.getPlainBody().slice(0,1000));
    body.appendHorizontalRule();
  });
  Logger.log(doc.getUrl());
}
