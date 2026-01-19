function ex67_labelInvoices() {
  const label = GmailApp.getUserLabelByName('Invoices') || GmailApp.createLabel('Invoices');
  const threads = GmailApp.search('subject:(invoice OR receipt) newer_than:30d');
  threads.forEach(t=>label.addToThread(t));
}
