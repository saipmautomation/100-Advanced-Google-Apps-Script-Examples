function ex68_archiveSender() {
  const threads = GmailApp.search('from:newsletter@example.com in:inbox');
  threads.forEach(t=>t.moveToArchive());
}
