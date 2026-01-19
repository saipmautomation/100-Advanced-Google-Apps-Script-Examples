function ex50_removeDoubleBlankLines() {
  const body=DocumentApp.getActiveDocument().getBody();
  const paras=body.getParagraphs();
  for(let i=paras.length-2;i>=0;i--){
    if(!paras[i].getText().trim() && !paras[i+1].getText().trim()) paras[i+1].removeFromParent();
  }
}
