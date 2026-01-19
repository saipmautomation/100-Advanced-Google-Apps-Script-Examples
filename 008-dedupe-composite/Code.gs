function ex08_dedupeComposite() {
  const sh = SpreadsheetApp.getActiveSheet();
  const data = sh.getDataRange().getValues();
  const header = data.shift();
  const seen = new Set();
  const out = [header];

  data.forEach(r=>{
    const key = [r[0],r[1],r[2]].map(v=>String(v).trim()).join('|');
    if (!key.replace(/\|/g,'')) return;
    if (!seen.has(key)) { seen.add(key); out.push(r); }
  });

  sh.clear();
  sh.getRange(1,1,out.length,out[0].length).setValues(out);
}
