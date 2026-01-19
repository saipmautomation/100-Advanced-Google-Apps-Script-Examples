function ex82_calendarNoDuplicates() {
  const cal=CalendarApp.getDefaultCalendar();
  const title='Standup';
  const start=new Date(); 
  const end=new Date(start.getTime()+30*60000);
  const existing=cal.getEvents(start,end,{search:title});
  if(existing.length===0) cal.createEvent(title,start,end);
}
