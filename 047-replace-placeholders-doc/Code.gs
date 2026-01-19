function ex47_replacePlaceholders() {
  const doc=DocumentApp.getActiveDocument();
  const body=doc.getBody();
  const map = { '{{NAME}}':'Lars', '{{DATE}}': new Date().toDateString() };
  Object.entries(map).forEach(([k,v])=>body.replaceText(k, String(v)));
}
