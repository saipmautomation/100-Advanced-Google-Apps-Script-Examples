function ex57_extractLinks() {
  const body=DocumentApp.getActiveDocument().getBody();
  const found=[];
  body.getParagraphs().forEach(p=>{
    const text=p.editAsText();
    for(let i=0;i<text.getText().length;i++){
      const url=text.getLinkUrl(i);
      if(url) found.push(url);
    }
  });
  Logger.log([...new Set(found)]);
}
