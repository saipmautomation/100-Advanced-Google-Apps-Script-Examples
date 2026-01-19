function ex96_safeRun() {
  try {
    risky_();
  } catch (err) {
    Logger.log(err.stack || err);
    GmailApp.sendEmail(Session.getActiveUser().getEmail(),'Script error', String(err.stack || err));
    throw err;
  }
}
function risky_(){ throw new Error('Boom'); }
