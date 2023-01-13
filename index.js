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

    let newUser = new Usuario(newName, newPass, newEmail) 
       
    if(localStorage.getItem("users") == null || localStorage.getItem("users") == undefined){
        localStorage.setItem("users", "[]")
    }
    
    let newData = JSON.parse(localStorage.getItem("users"))
    newData.push(newUser)

    localStorage.setItem("users", JSON.stringify(newData))
}