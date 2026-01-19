function ex09_onEditNotes(e) {
  const r = e.range;
  if (r.getRow() === 1) return;
  const prev = r.getNote() || '';
  const msg = `${new Date().toISOString()} | ${e.oldValue ?? ''} → ${e.value ?? ''}`;
  r.setNote((prev ? prev + '\n' : '') + msg);
}
