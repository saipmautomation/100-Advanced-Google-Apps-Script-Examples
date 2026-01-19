function ex77_sendFromDraft() {
  const subject='TEMPLATE: Welcome';
  const drafts=GmailApp.getDrafts().filter(d=>d.getMessage().getSubject()===subject);
  if(!drafts.length) throw new Error('Draft not found: ' + subject);
  const msg=drafts[0].getMessage();
  const html=msg.getBody().replace('{{NAME}}','Friend');
  GmailApp.sendEmail('someone@example.com','Welcome!','', { htmlBody: html });
}
