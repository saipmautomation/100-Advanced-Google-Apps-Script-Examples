function ex63_docFromJson() {
  const data = { title:'Status', items:[{name:'Ava',score:95},{name:'Noah',score:88}] };
  const doc = DocumentApp.create(data.title);
  const body = doc.getBody();
  body.appendParagraph(data.title).setHeading(DocumentApp.ParagraphHeading.HEADING1);
  data.items.forEach(i=> body.appendParagraph(`${i.name}: ${i.score}`));
  Logger.log(doc.getUrl());
}
