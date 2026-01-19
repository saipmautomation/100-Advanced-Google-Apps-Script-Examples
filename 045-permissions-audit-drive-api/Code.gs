function ex45_permissionsAudit() {
  const fileId='PASTE_FILE_ID';
  const perms = Drive.Permissions.list(fileId).items || [];
  perms.forEach(p=>Logger.log(`${p.role} ${p.type} ${p.emailAddress || ''}`));
}
