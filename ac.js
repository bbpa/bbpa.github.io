fetch("https://www.ictjob.be/en/auth/unsubscribe-submit", {
  method: "POST",
  credentials: "include",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
.then(response => {
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  alert("Account Deleted !");
})
.catch(error => {
  console.error(error);
});
