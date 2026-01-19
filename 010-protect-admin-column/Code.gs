function ex10_protectAdminColumn() {
  const sh = SpreadsheetApp.getActiveSheet();
  const p = sh.getRange('H:H').protect().setDescription('Admin only');
  p.removeEditors(p.getEditors());
}
