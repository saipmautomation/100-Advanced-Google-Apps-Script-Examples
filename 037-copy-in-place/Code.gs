function ex37_copyInPlace() {
  const fileId='PASTE_FILE_ID';
  const f=DriveApp.getFileById(fileId);
  const parents=f.getParents();
  if(!parents.hasNext()) throw new Error('No parent folder.');
  const folder=parents.next();
  const copy=f.makeCopy(f.getName() + ' (Copy)', folder);
  Logger.log(copy.getUrl());
}
