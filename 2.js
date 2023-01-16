let step1=new XMLHttpRequest();
step1.withCredentials=true;
step1.open("GET","/member/logout")
step1.send();
step1.onreadystatechange=()=>{
 if(step1.status==4){
   step1.open("GET","https://advertiser.trafficjunky.com/help-center")
step1.send();
 }
  
}
/*let step2=new Image();
step2.src="https://advertiser.trafficjunky.com/help-center"*/
