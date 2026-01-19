function ex83_eventWithGuests() {
  const cal=CalendarApp.getDefaultCalendar();
  const start=new Date(Date.now()+3600*1000), end=new Date(start.getTime()+3600*1000);
  const ev=cal.createEvent('Planning',start,end,{guests:'a@example.com,b@example.com'});
  ev.addEmailReminder(30);
}
