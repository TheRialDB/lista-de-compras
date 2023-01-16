function logIn(){
    let user = document.getElementById("txtUser").value
    let password = document.getElementById("txtPassword").value

    let userArr = JSON.parse(localStorage.getItem("users"))

    let i = -1

    for (let index = 0; index < userArr.length; index++) {
        
        if(user==userArr[index].usuario){
            i = index
            break
        }             
    }

    if(i != -1){
        if(password==userArr[i].contrasena){
            console.log("El usuario es", userArr[i].usuario)
            document.location.href = "prueba.html"
        }
        else{
            console.log("Contraseña incorrecta")
            alert("Contraseña incorrecta")
            document.getElementById("txtPassword").value = ""
        }
    }
    else{
        console.log("El usuario no existe")
        alert("Usuario inexistente")
    }

}


function signUp(){
 
    let newName = document.getElementById("txtNewUser").value
    let newPass = document.getElementById("txtNewPassword").value
    let confPass = document.getElementById("txtConfPassword").value
    let newEmail = document.getElementById("txtEmail").value 
    
    let userArr = JSON.parse(localStorage.getItem("users"))
    let i = -1

    if(localStorage.getItem("users") == null || localStorage.getItem("users") == undefined){
        localStorage.setItem("users", "[]")
    }
    else {
        for (let index = 0; index < userArr.length; index++) {
                
            if(newName==userArr[index].usuario){
                i = index
                break
            }      
            else if(newEmail==userArr[index].correoElectronico){
                i = -2
                break
            }       
        }
    }
    
    if( newPass != confPass){
        i = -3
    }

    if(i==-1){
        let newUser = new Usuario(newName, newPass, newEmail) 
               
        let newData = JSON.parse(localStorage.getItem("users"))
        newData.push(newUser)

        localStorage.setItem("users", JSON.stringify(newData))
    }
    else if(i==-2){
        alert("Correo electronico en uso")
        document.getElementById("txtEmail").value = ""
    }
    else if(i==-3){
        alert("Las contraseñas no coinciden")
        document.getElementById("txtNewPassword").value = ""
        document.getElementById("txtConfPassword").value = ""
    }
    else{
        alert("Nombre de usuario no disponible")
        document.getElementById("txtNewUser").value = ""
    }    
}

function onSignIn(googleUser) {
    const responsePayload = parseJwt(googleUser.credential);

     console.log("ID: " + responsePayload.sub);
     console.log('Full Name: ' + responsePayload.name);
     console.log('Given Name: ' + responsePayload.given_name);
     console.log('Family Name: ' + responsePayload.family_name);
     console.log("Image URL: " + responsePayload.picture);
     console.log("Email: " + responsePayload.email);
//    $("#name").text(profile.getName());
//    $("#email").text(profile.getEmail());
//    $("#image").attr('src', profile.getImageUrl());
//    $(".data").css("display","block");
//    $(".g-signin2").css("display","none");
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       alert("you have been signed out successfully")
//       $(".g-signin2").css("display","block");
//       $(".data").css("display","none");
//     });
// }
