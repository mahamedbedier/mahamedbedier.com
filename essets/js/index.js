/////////////////////////////////////////////////////////
//////////////////////// LOGIN PAEG ////////////////////
///////////////////////////////////////////////////////

let username = document.getElementById("username")
let pass = document.getElementById("pass")
let submit = document.getElementById("submit")
let eye = document.getElementById("eye")
let eyeHidden = document.getElementById("eyeHidden")

    // cheack function
function cheack(){ 

    
        // cheack first name
        if(username.value == ""){
            username.nextElementSibling.style.visibility = "visible"
            username.style.border = "solid 1px red"
            username.focus()
        }
        // cheack password
        else if(pass.value == ""){
            pass.nextElementSibling.style.visibility = "visible"
            pass.style.border = "solid 1px red"
            pass.focus()  
        }  
        else{
            // window.location = "https://mahamedbedier.github.io/my-website/main"
        }


}


username.oninput = function(){
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


// after press enter on username
username.addEventListener("keyup", e => {
    e.preventDefault()
    if(e.keyCode === 13){
        pass.focus()
    }
})
// after press enter on pass
pass.addEventListener("keyup", e => {
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



