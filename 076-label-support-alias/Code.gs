function ex76_labelSupportAlias() {
  const label=GmailApp.getUserLabelByName('Support')||GmailApp.createLabel('Support');
  GmailApp.search('to:support@yourdomain.com is:unread',0,50).forEach(t=>label.addToThread(t));
}
