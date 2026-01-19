function ex56_mergeDocs() {
  const target=DocumentApp.create('Merged Doc');
  const body=target.getBody();
  const ids=['PASTE_DOC_ID_1','PASTE_DOC_ID_2'];
  ids.forEach(id=>{
    const src=DocumentApp.openById(id).getBody();
    src.getParagraphs().forEach(p=> body.appendParagraph(p.getText()));
    body.appendPageBreak();
  });
  Logger.log(target.getUrl());
}
