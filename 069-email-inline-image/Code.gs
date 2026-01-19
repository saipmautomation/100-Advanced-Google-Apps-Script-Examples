function ex69_emailInlineImage() {
  const blob = UrlFetchApp.fetch('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png').getBlob();
  GmailApp.sendEmail('someone@example.com','HTML Email','Your client does not support HTML.',{
    htmlBody:'<h2>Hello</h2><p>Inline image:</p><img src="cid:logo"/>',
    inlineImages:{ logo: blob }
  });
}
