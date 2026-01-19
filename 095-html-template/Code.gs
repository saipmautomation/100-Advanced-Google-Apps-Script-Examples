function ex95_templateHtml() {
  const t = HtmlService.createTemplate('<h2>Hello <?= name ?></h2>');
  t.name = 'Lars';
  SpreadsheetApp.getUi().showSidebar(t.evaluate().setTitle('Template Demo'));
}
