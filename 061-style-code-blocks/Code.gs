function ex61_styleCodeBlocks() {
  const body=DocumentApp.getActiveDocument().getBody();
  body.getParagraphs().forEach(p=>{
    const t=p.getText();
    if(t.startsWith('```') || t.startsWith('    ')){
      p.setBackgroundColor('#f3f4f6');
      p.setFontFamily('Courier New');
    }
  });
}
