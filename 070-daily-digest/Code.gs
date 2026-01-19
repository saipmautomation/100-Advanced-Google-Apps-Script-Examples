function ex70_dailyDigest() {
  const threads = GmailApp.search('newer_than:1d in:inbox', 0, 50);
  const lines = threads.map(t=>'- ' + t.getFirstMessageSubject()).join('\n');
  GmailApp.sendEmail(Session.getActiveUser().getEmail(), 'Daily Digest', lines || 'No messages found.');
}
