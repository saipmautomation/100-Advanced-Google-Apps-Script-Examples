function ex26_driveSearch() {
  const it = DriveApp.searchFiles('mimeType="application/vnd.google-apps.document" and trashed=false');
  let n=0;
  while (it.hasNext() && n<10) { 
    const f=it.next(); 
    Logger.log(f.getName() + ' ' + f.getUrl()); 
    n++; 
  }
}
