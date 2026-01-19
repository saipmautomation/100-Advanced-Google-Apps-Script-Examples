function ex38_uniqueName(baseName, folderId) {
  const folder = DriveApp.getFolderById(folderId);
  let name = baseName, i=1;
  while (folder.getFilesByName(name).hasNext()) name = `${baseName} (${i++})`;
  return name;
}
