// ==UserScript==
// @name         JvArchive Helper 18-25
// @namespace    https://jeuxvideo.com
// @updateURL    https://github.com/AtomisteBX/JvArchive-Helper/blob/main/jvarchive-helper-latest.js
// @version      1.0.0
// @description  ajoute un bouton afin de consulter une archive du topic sur JVArchive
// @author       Atomiste aKa DalDoeK
// @include      https://www.jeuxvideo.com/forums/42*
// @include      http://www.jeuxvideo.com/forums/42*
// @match        https://www.jeuxvideo.com/forums/42*
// @match        http://www.jeuxvideo.com/forums/42*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==


var topicbutton = 0;
$(".img-erreur").before(
     "<div id=\"sock\">"); //on créé un div tampon pour verifier la p^résence d'un 410

if ($("#sock").length === 1) {
$(".row").after(
     "<button id=\"btn-censure\">410 : Consulter l'archive"); //on créé un bouton qui n'apparaitra qu'en cas de 410
    var btncensure = document.getElementById("btn-censure"); //on récupère l'ID du bouton spécial 410
    btncensure.addEventListener('click', archiveFindCensure); //on écoute pour savoir si le bouton est cliqué
    topicbutton = ++topicbutton;

} else if (topicbutton != 1) {

 $(".bloc-outils-top").append(
     "<button id=\"btn-archive\">Consulter l'archive"); //on créé un  bouton "consulter l'archive"
    var btn = document.getElementById('btn-archive'); //on récupère l'ID du bouton
    btn.addEventListener('click', archiveFind); //on écoute pour savoir si le bouton est cliqué
    topicbutton = ++topicbutton;

}

        var url = window.location.href;
        var archiveurl = url.replace("jeuxvideo.com", "jvarchive.com"); //on remplace jeuxvideo.com par jvarchive.com pour obtenir la page JVArchive du topic

        function archiveFind() {
            alert("Vous allez être redirigé vers la page JVArchive de ce topic. Si ce topic n'a pas encore été archivé, gardez le lien de coté et venez le consulter un peu plus tard."); //on prévient l'utilisateur qu'il va être redirigé
            window.open(archiveurl); //on ouvre une nouvelle page contenant l'adresse JVArchive
        };

        function archiveFindCensure() {
            alert("Vous allez être redirigé vers la page JVArchive de ce topic. Si une archive de ce topic éxistait, vous pourrez la consulter."); //on prévient l'utilisateur qu'il va être redirigé
            window.open(archiveurl); //on ouvre une nouvelle page contenant l'adresse JVArchive
        };
