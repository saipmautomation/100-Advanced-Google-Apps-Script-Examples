function ex27_cloneFolder() {
  const sourceId = 'PASTE_SOURCE_FOLDER_ID';
  const targetParentId = 'PASTE_TARGET_PARENT_FOLDER_ID';
  const src = DriveApp.getFolderById(sourceId);
  const parent = DriveApp.getFolderById(targetParentId);
  const dst = parent.createFolder(src.getName() + ' (Copy)');
  cloneFolder_(src, dst);
}
function cloneFolder_(src, dst) {
  const files = src.getFiles();
  while (files.hasNext()) dst.addFile(files.next().makeCopy());
  const folders = src.getFolders();
  while (folders.hasNext()) {
    const sub = folders.next();
    const newSub = dst.createFolder(sub.getName());
    cloneFolder_(sub, newSub);
  }
}
