function ex39_convertXlsxToSheet() {
  const fileId='PASTE_XLSX_FILE_ID';
  const resource = { title: 'Converted Sheet', mimeType: MimeType.GOOGLE_SHEETS };
  const newFile = Drive.Files.copy(resource, fileId);
  Logger.log(newFile.alternateLink);
}
