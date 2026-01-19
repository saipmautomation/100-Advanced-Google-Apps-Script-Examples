function ex73_autoReply() {
  const threads=GmailApp.search('subject:"Request Info" newer_than:1d',0,10);
  threads.forEach(t=>{
    const msg=t.getMessages().pop();
    msg.reply('Thanks! We received your request and will respond soon.');
  });
}
