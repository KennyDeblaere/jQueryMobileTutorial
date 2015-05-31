/**
 * Created by Kenny on 31/05/2015.
 */
var gUsers;
var gCurrentUser;

function createUser(username, password){
    var userId = 0;
    if(gUsers != undefined)
        userId = gUsers.length;
    var pass = password;
    return {
        id : userId,
        username : username,
        password : password
    }
}

function addUser(){
    gUsers.push(createUser($("#usernameRegister").val().toLowerCase(), $("#passwordRegister").val()));
    localStorage.gUsers = JSON.stringify(gUsers);
}

function doLogin(){
    localStorage.currentUserID = -1;
    var a = document.getElementById('login');
    for ( var i = 0; i < gUsers.length; i++) {
        if($("#username").val().toLowerCase() == gUsers[i].username && $("#password").val() == gUsers[i].password) {
            gCurrentUser = gUsers[i];
            a.href="#mainPage";
        }
        else
            a.href="#";

    }
    if(document.getElementById('remember').checked)
        localStorage.currentUserID = gCurrentUser.id;
}

function doLogout(){
    localStorage.currentUserID = -1;
}


$(document).ready(function() {

    if (localStorage.gUsers == undefined) {
        gUsers = [createUser('kenny', 'password')];
        localStorage.gUsers = JSON.stringify(gUsers);
        localStorage.currentUserID = -1;
    }
    else
        gUsers = JSON.parse(localStorage.gUsers);

    if(localStorage.currentUserID > -1)
        $.mobile.changePage("#mainPage");
    else
        $.mobile.changePage("#loginPage");


    $("#register").click(addUser);
    $("#login").click(doLogin);
    $("#logout").click(doLogout);

    console.log('Geladen');
});
