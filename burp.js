fetch('/my-account', { credentials: 'include' })
  .then(r => r.text())
  .then(html => {
    const csrf = new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector('input[name="csrf"]')?.value;



    return fetch('/my-account/delete', {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams({ csrf })
    });
  });
