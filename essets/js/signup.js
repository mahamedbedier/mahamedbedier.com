/////////////////////////////////////////////////////////
//////////////////////// LOGEN PAEG ////////////////////
///////////////////////////////////////////////////////

let username = document.getElementById("username")
let userlastname = document.getElementById("userlastname")
let email = document.getElementById("email")
let pass = document.getElementById("pass")
let confpass = document.getElementById("confpass")
let submit = document.getElementById("submit")
let eye = document.getElementById("eye")
let eyeHidden = document.getElementById("eyeHidden")

let lowercase = new RegExp("(?=.*[a-z])")
let uppercase = new RegExp("(?=.*[A-Z])")
let number = new RegExp("(?=.*[0-9])")
let digets = new RegExp("(?=.{8,})")
let emailcha = new RegExp("(?=.*[@.com])")


    // cheack function
function cheack(){ 

    
        // cheack first name
        if(username.value == ""){
            username.nextElementSibling.style.visibility = "visible"
            username.style.border = "solid 1px red"
            username.focus()
        }
        // cheack email
        else if(email.value == ""){
            email.nextElementSibling.style.visibility = "visible"
            email.style.border = "solid 1px red"
            email.focus() 
        }
        // cheack password
        else if(pass.value == ""){
            pass.nextElementSibling.style.visibility = "visible"
            pass.style.border = "solid 1px red"
            pass.focus()  
        }   
        // cheack conferm password
        else if(confpass.value == ""){
            confpass.nextElementSibling.style.visibility = "visible"
            confpass.style.border = "solid 1px red"
            confpass.focus()
        }
        // check conferm password equals to password
        else if (pass.value !== confpass.value) {
            confpass.nextElementSibling.style.visibility = "visible"
            confpass.nextElementSibling.innerHTML = "conferm password not matching"
            confpass.value = ""
            confpass.style.border = "solid 1px red"
            confpass.focus()
        }
        else{
            localStorage.username = username.value
            window.location = "https://mahamedbedier.github.io/mahamedbedier.com/main.html"
        }

        if(pass.value !== ""){

            if (lowercase.test(pass.value) === false) {
                pass.focus()
                document.getElementById("lowercase").style.color = "red"
                document.getElementById("lowercase").style.transform = "scale(1.1)"
            }
    
             if (uppercase.test(pass.value) === false) {
                pass.focus()
                document.getElementById("uppercase").style.color = "red"
                document.getElementById("uppercase").style.transform = "scale(1.1)"
            }
    
             if (number.test(pass.value) === false) {
                pass.focus()
                document.getElementById("number").style.color = "red"
                document.getElementById("number").style.transform = "scale(1.1)"
            }
    
             if (digets.test(pass.value) === false) {
                pass.focus()
                document.getElementById("charactar").style.color = "red"
                document.getElementById("charactar").style.transform = "scale(1.1)"
            }
        }



}


username.oninput = function(){
    this.nextElementSibling.style.visibility = "hidden"
    this.style.border = "solid 1px rgb(131, 22, 233)"
}
email.oninput = function(){
    this.nextElementSibling.style.visibility = "hidden"
    this.style.border = "solid 1px rgb(131, 22, 233)"
}
pass.oninput = function(){
    this.nextElementSibling.style.visibility = "hidden"
    this.style.border = "solid 1px rgb(131, 22, 233)"
    if (pass.getAttribute("type") === "password") {
        eye.classList.remove("active")
        eyeHidden.classList.add("active")
    }
    if(pass.getAttribute("type") == "text"){
        eye.classList.add("active")
        eyeHidden.classList.remove("active")
    }
}
confpass.oninput = function(){
    this.nextElementSibling.style.visibility = "hidden"
    this.style.border = "solid 1px rgb(131, 22, 233)"
}
// regular expretion function
pass.onkeyup = function (){
    if (lowercase.test(pass.value)) {
        document.getElementById("lowercase").style.color = "rgb(220, 114, 38)" 
    }
    if (uppercase.test(pass.value)) {
        document.getElementById("uppercase").style.color = "rgb(220, 114, 38)" 
    }
    if (number.test(pass.value)) {
        document.getElementById("number").style.color = "rgb(220, 114, 38)" 
    }
    if (digets.test(pass.value)) {
        document.getElementById("charactar").style.color = "rgb(220, 114, 38)" 
    }

}



// after press enter on userfirstname
username.addEventListener("keyup", e => {
    e.preventDefault()
    if(e.keyCode === 13){
        email.focus()
    }
})
// after press enter on email
email.addEventListener("keyup", e => {
    e.preventDefault()
    if(e.keyCode === 13){
        pass.focus()
    }
})
// after press enter on pass
pass.addEventListener("keyup", e => {
    e.preventDefault()
    if(e.keyCode === 13){

        if (lowercase.test(pass.value) === false) {
            pass.focus()
            document.getElementById("lowercase").style.color = "red"
            document.getElementById("lowercase").style.transform = "scale(1.1)"
        }

         if (uppercase.test(pass.value) === false) {
            pass.focus()
            document.getElementById("uppercase").style.color = "red"
            document.getElementById("uppercase").style.transform = "scale(1.1)"
        }

         if (number.test(pass.value) === false) {
            pass.focus()
            document.getElementById("number").style.color = "red"
            document.getElementById("number").style.transform = "scale(1.1)"
        }

         if (digets.test(pass.value) === false) {
            pass.focus()
            document.getElementById("charactar").style.color = "red"
            document.getElementById("charactar").style.transform = "scale(1.1)"
        }
        else{
            confpass.focus()
        }
    }
})
// after press enter on confpass
confpass.addEventListener("keyup", e => {
    e.preventDefault()
    if(e.keyCode === 13){
        submit.click()
    }
})


// eye onclick
eye.onclick = function() {
    eyeHidden.classList.add("active")
    eye.classList.remove("active")
    pass.setAttribute("type", "password");


}
// eyehidden onclick
eyeHidden.onclick = function() {
    eyeHidden.classList.remove("active")
    eye.classList.add("active")
    pass.setAttribute("type", "text");

}



