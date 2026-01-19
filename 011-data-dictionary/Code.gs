function ex11_dataDictionary() {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getActiveSheet();
  const dict = ss.getSheetByName('Data Dictionary') || ss.insertSheet('Data Dictionary');
  const headers = sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0];
  const samples = sh.getRange(2,1,Math.min(50, sh.getLastRow()-1), sh.getLastColumn()).getValues();

  const out = [['Column','Index','Sample Values']];
  headers.forEach((h,i)=>{
    const sample = samples.map(r=>r[i]).filter(v=>v!=='' && v!=null).slice(0,5).join(', ');
    out.push([h, i+1, sample]);
  });

  dict.clear();
  dict.getRange(1,1,out.length,out[0].length).setValues(out);
}
