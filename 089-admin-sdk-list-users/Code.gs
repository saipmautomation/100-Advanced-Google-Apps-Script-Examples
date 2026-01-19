function ex89_listUsers() {
  const users = AdminDirectory.Users.list({customer:'my_customer', maxResults: 10}).users || [];
  users.forEach(u=>Logger.log(u.primaryEmail));
}
