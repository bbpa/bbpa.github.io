const xhr = new XMLHttpRequest();
xhr.open('GET', '/user/api/internal/profile', true);
xhr.withCredentials = true;

xhr.onload = function () {
  alert(xhr.responseText);
};

xhr.send();
