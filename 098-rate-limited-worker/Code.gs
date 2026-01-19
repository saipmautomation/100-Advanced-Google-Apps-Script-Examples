function ex98_rateLimitedCalls() {
  const urls=['https://example.com','https://example.com'];
  urls.forEach((u,i)=>{
    const res=UrlFetchApp.fetch(u,{muteHttpExceptions:true});
    Logger.log(i + ' ' + res.getResponseCode());
    Utilities.sleep(500); // throttle
  });
}
