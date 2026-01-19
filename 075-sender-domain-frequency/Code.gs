function ex75_senderDomains() {
  const threads=GmailApp.search('newer_than:14d',0,100);
  const freq={};
  threads.forEach(t=>{
    const from=t.getMessages()[0].getFrom();
    const email=(from.match(/<(.+?)>/)?.[1]||from).trim();
    const domain=email.split('@')[1]||'';
    if(domain) freq[domain]=(freq[domain]||0)+1;
  });
  const top=Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,20);
  Logger.log(top);
}
