function ex52_pageBreakBeforeH1() {
  const doc=DocumentApp.getActiveDocument();
  const body=doc.getBody();
  const pars=body.getParagraphs();
  for(let i=1;i<pars.length;i++){
    if(pars[i].getHeading()===DocumentApp.ParagraphHeading.HEADING1){
      body.insertParagraph(body.getChildIndex(pars[i]), '').appendPageBreak();
    }
  }
}
