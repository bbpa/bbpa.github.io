let xhr=new XMLHttpRequest()
xhr.withCredentials=true;
xhr.open("GET","/account/user/account-preferences?form_api=1");
xhr.onreadystatechange=()=>{
if(xhr.readyState==4){
let jsondata=JSON.parse(xhr.response).content.form.fields;
let data="";
for(fields in jsondata){
data+=fields+": "+jsondata[fields]["fieldValue"]+"\n";
}
alert(data)
}
}
xhr.send();
