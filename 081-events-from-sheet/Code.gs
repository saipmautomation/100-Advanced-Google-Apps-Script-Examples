function ex81_sheetToCalendar() {
  const cal=CalendarApp.getDefaultCalendar();
  const sh=SpreadsheetApp.getActiveSheet();
  const rows=sh.getRange(2,1,sh.getLastRow()-1,3).getValues(); // Title, Start, End
  rows.forEach(r=>{
    const [title,start,end]=r;
    if(title && start && end) cal.createEvent(String(title), new Date(start), new Date(end));
  });
}
