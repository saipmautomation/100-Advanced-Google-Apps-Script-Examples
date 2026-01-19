function ex74_findUnsubscribe() {
  const threads=GmailApp.search('newer_than:30d "unsubscribe"',0,50);
  threads.forEach(t=>Logger.log(t.getFirstMessageSubject()));
}
