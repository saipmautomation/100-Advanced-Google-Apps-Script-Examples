function ex94_showUi() {
  const html = HtmlService.createHtmlOutput(`
    <button onclick="go()">Run</button>
    <pre id="out"></pre>
    <script>
      function go(){
        google.script.run.withSuccessHandler(r=>out.textContent=r).serverHello();
      }
      const out=document.getElementById('out');
    </script>
  `).setWidth(300).setHeight(200);
  SpreadsheetApp.getUi().showModalDialog(html,'UI Demo');
}
function serverHello(){ return 'Hello from server at ' + new Date().toISOString(); }
