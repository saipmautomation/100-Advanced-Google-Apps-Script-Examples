function ex78_deleteEmptyLabels() {
  const labels=GmailApp.getUserLabels();
  labels.forEach(l=>{
    if(l.getThreads(0,1).length===0 && l.getUnreadCount()===0) {
      // l.deleteLabel(); // uncomment only if you really want it
      Logger.log('Empty label: ' + l.getName());
    }
  });
}
