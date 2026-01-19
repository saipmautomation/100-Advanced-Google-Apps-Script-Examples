function ex49_styleHeadings() {
  const doc=DocumentApp.getActiveDocument();
  const body=doc.getBody();
  const pars=body.getParagraphs();
  pars.forEach(p=>{
    const t=p.getText();
    if(t.startsWith('## ')) { p.setHeading(DocumentApp.ParagraphHeading.HEADING2); p.setText(t.replace(/^##\s+/,'')); }
    else if(t.startsWith('# ')) { p.setHeading(DocumentApp.ParagraphHeading.HEADING1); p.setText(t.replace(/^#\s+/,'')); }
  });
}
