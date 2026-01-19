function ex01_rangeListFormat() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.getRangeList(['A1:D1','A3:D3','A5:D5']).setFontWeight('bold').setBackground('#f3f4f6');
}
