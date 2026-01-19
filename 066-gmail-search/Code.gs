function ex66_gmailSearch() {
  const threads = GmailApp.search('newer_than:7d in:inbox', 0, 20);
  threads.forEach(t=>Logger.log(t.getFirstMessageSubject()));
}
