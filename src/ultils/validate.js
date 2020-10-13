function validatePhone(phone) {
  let re = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
  let testPhone = re.test(phone);
  return testPhone;
}
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
///
export { validateEmail, validatePhone };
