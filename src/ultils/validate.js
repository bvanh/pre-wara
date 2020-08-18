function validatePhone(phone) {
  let re = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
  let testPhone = re.test(phone);
  return testPhone;
}
function validateEmail(email) {
  let regex = /^[a-z][a-z0-9]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
  let testEmail = regex.test(email);
  return testEmail;
}

export { validateEmail, validatePhone };
