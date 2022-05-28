let name = window.document.getElementById("name")
let email = document.querySelector("#email")
let subject = document.querySelector("#subject")

name.style.width = "100%"
email.style.width = "100%"

function validName() {
let txtName = document.querySelector("#txtName")
if(name.value.length < 3){
    txtName.innerHTML = "Invalid name"
    txtName.style.color = "red"
} else{
    txtName.innerHTML = "Valid name"
    txtName.style.color = "green"
}

}

function validEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".")== -1) {
        txtEmail.innerHTML = 'Invalid email.'
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Valid email."
        txtEmail.style.color = "green"
    }
}