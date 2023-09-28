function load() {
    scroll(0,1)
}  

let userH2 = document.getElementById("userH2")
 
if (localStorage.getItem("username") == null) {

    userH2.innerHTML = "hi, " + "i’m"

} else {
            userH2.innerHTML = "hi, " + "<span>" + localStorage.getItem("username")  +
            " " +"</span>"  + " i’m"
}




let bars = document.getElementById("bars")
let navBar = document.getElementById("nav")
let goBake = document.getElementById("goBake")
// nav items
let btnNav = document.getElementById("btnNav")


// defult function to remove and add classes frome nav bar and go bake button
function remov(){
    navBar.classList.toggle("active")
    goBake.classList.toggle("active")
}
// humburger on click
bars.onclick = function () {
    remov()
}
// go bake on click
goBake.onclick = function () {
    remov()
}
// btn nav on click
btnNav.onclick = function () {
    remov()
}

    
let readless = document.querySelectorAll(".readless")
let readmore = document.querySelectorAll(".readmore")
let servicesCard = document.querySelectorAll(".services-card")


readmore.forEach(element => {

    element.onclick = function () {
        this.parentElement.parentNode.classList.add("active")
        this.style.display = "none"
        this.nextElementSibling.style.display = "inline-block"

        readless.forEach(element => {
            element.onclick = function () {
                this.parentElement.parentNode.classList.remove("active")
                this.style.display = "none"
                this.previousElementSibling.style.display = "inline-block"
            }
        });

    }
});









// up button
let upBtn = document.getElementById("upBtn")
window.onscroll = function(){   
    if (scrollY >= 1500){
        upBtn.style.display = "block";
    }else{
        upBtn.style.display = "none";
    }
}
// uo button on click
upBtn.addEventListener("click", function(){
    scroll(0,0)
})



let aofli = document.querySelectorAll("nav a")

aofli.forEach(element => {
    element.onclick = function(){
        remov()
    }
});



let sec= document.querySelectorAll("section");
window.onscroll = () =>{
    sec.forEach(section => {
        let scroolly = window.scrollY;
        let ofset = section.offsetTop - 169;
        let heightt = section.offsetHeight;
        let id = section.getAttribute("id");
        
            if( scroolly >= ofset &&  scroolly < ofset + heightt){
                aofli.forEach(link => {
                    link.classList.remove("active")
                    document.querySelector("nav a[href*="+ id +"]").classList.add("active")
                    section.classList.add("animaton")
                })
            }  else{
                section.classList.remove("animaton")
            }
    })
}   
 
        

let education = document.getElementById("education");
let courses = document.getElementById("courses");
let langugh = document.getElementById("langugh");
let skills = document.getElementById("skills");

let educationDiv = document.getElementById("educationDiv");
let coursesDiv = document.getElementById("coursesDiv");
let langughDiv = document.getElementById("langughDiv");
let skillsDiv = document.getElementById("skillsDiv");

education.addEventListener("click" , function(){
    this.classList.add("active")
    courses.classList.remove("active")
    langugh.classList.remove("active")
    skills.classList.remove("active")
    educationDiv.classList.add("active")
    coursesDiv.classList.remove("active")
    langughDiv.classList.remove("active")
    skillsDiv.classList.remove("active")
})


courses.addEventListener("click" , function(){
    this.classList.add("active")
    education.classList.remove("active")
    langugh.classList.remove("active")
    skills.classList.remove("active")
    educationDiv.classList.remove("active")
    coursesDiv.classList.add("active")
    langughDiv.classList.remove("active")
    skillsDiv.classList.remove("active")
})


langugh.addEventListener("click" , function(){
    this.classList.add("active")
    courses.classList.remove("active")
    education.classList.remove("active")
    skills.classList.remove("active")
    educationDiv.classList.remove("active")
    coursesDiv.classList.remove("active")
    langughDiv.classList.add("active")
    skillsDiv.classList.remove("active")
})

skills.addEventListener("click" , function(){
    this.classList.add("active")
    courses.classList.remove("active")
    education.classList.remove("active")
    langugh.classList.remove("active")
    educationDiv.classList.remove("active")
    coursesDiv.classList.remove("active")
    langughDiv.classList.remove("active")
    skillsDiv.classList.add("active")
})


