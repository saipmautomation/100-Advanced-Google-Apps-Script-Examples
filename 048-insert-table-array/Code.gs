function ex48_insertTable() {
  const doc=DocumentApp.getActiveDocument();
  const body=doc.getBody();
  const rows=[['Name','Score'],['Ava','95'],['Noah','88']];
  body.appendTable(rows);
}
