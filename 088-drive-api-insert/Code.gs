function ex88_driveApiCreateInFolder() {
  const folderId='PASTE_FOLDER_ID';
  const resource={ title:'hello.txt', mimeType:'text/plain', parents:[{id:folderId}] };
  const file=Drive.Files.insert(resource, Utilities.newBlob('Hello'));
  Logger.log(file.alternateLink);
}
