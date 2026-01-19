function ex42_folderTree() {
  const rootId='PASTE_FOLDER_ID';
  const root=DriveApp.getFolderById(rootId);
  printTree_(root, 0);
}
function printTree_(folder, depth) {
  Logger.log('  '.repeat(depth) + folder.getName());
  const sub=folder.getFolders();
  while(sub.hasNext()) printTree_(sub.next(), depth+1);
}
