function logIn(){
    

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