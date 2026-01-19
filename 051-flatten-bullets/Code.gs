function ex51_flattenBullets() {
  const body=DocumentApp.getActiveDocument().getBody();
  const paras=body.getParagraphs();
  paras.forEach(p=>{
    if (p.getListId()) p.setIndentStart(0).setIndentFirstLine(0);
  });
}
