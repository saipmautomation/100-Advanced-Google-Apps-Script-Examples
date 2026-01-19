function ex90_bigqueryQuery() {
  const projectId='PASTE_PROJECT_ID';
  const request={ query:'SELECT CURRENT_TIMESTAMP() AS now', useLegacySql:false };
  const res=BigQuery.Jobs.query(request, projectId);
  Logger.log(JSON.stringify(res.rows));
}
