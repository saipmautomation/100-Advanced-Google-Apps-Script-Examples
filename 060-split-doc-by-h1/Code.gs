function ex60_splitDocByH1() {
  const doc=DocumentApp.getActiveDocument();
  const pars=doc.getBody().getParagraphs();
  let current=null;

  pars.forEach(p=>{
    if(p.getHeading()===DocumentApp.ParagraphHeading.HEADING1){
      current=DocumentApp.create(p.getText());
      current.getBody().appendParagraph(p.getText()).setHeading(DocumentApp.ParagraphHeading.HEADING1);
    } else if(current) {
      current.getBody().appendParagraph(p.getText());
    }
  });
}
