function ex41_largeFiles() {
  const it = DriveApp.searchFiles('trashed=false and "root" in parents and quotaBytesUsed > 50000000');
  while(it.hasNext()) {
    const f=it.next();
    Logger.log(`${f.getName()} ${f.getSize()} ${f.getUrl()}`);
  }
}
