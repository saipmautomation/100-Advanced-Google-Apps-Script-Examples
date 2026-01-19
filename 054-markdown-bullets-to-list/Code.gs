function ex54_markdownBulletsToList() {
  const doc=DocumentApp.getActiveDocument();
  const body=doc.getBody();
  const pars=body.getParagraphs();
  pars.forEach(p=>{
    const t=p.getText();
    if(/^\-\s+/.test(t)) { p.setText(t.replace(/^\-+\s+/,'')); p.setBullet(true); }
  });
}
