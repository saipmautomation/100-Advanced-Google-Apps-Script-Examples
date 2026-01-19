function ex59_highlightPlaceholders() {
  const body=DocumentApp.getActiveDocument().getBody().editAsText();
  const text=body.getText();
  const re=/\{\{[^}]+\}\}/g;
  let m;
  while((m=re.exec(text))){
    body.setBackgroundColor(m.index, m.index+m[0].length-1, '#fff2cc');
  }
}
