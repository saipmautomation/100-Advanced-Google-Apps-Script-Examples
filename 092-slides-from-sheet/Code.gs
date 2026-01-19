function ex92_slidesFromSheet() {
  const sh=SpreadsheetApp.getActiveSheet();
  const rows=sh.getRange(2,1,Math.max(1,sh.getLastRow()-1),2).getValues(); // title, bullet
  const pres=SlidesApp.create('Auto Deck');
  rows.forEach(r=>{
    const [title,bullet]=r;
    const slide=pres.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
    slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE).asShape().getText().setText(String(title||''));
    slide.getPlaceholder(SlidesApp.PlaceholderType.BODY).asShape().getText().setText('• ' + String(bullet||''));
  });
  pres.getSlides()[0].remove(); // remove default title slide
  Logger.log(pres.getUrl());
}
