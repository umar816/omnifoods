$(document).ready(function() {
   
     

});

var featureSection = document.querySelector(".section-features");
var navElement = document.querySelector("nav");





// if top of the window is greater than or equal to the top of the section feature element: add the sticky class

// else if the top of the window is less than the top of the feature section take away sticky class from nav element
// 
// on window scroll event calling function sticky nav
window.addEventListener("scroll",stickyNav)
// function to add and remove sticky class on navElement
function stickyNav(){
    if(window.pageYOffset >= featureSection.offsetTop){ 
        
        // adding class to  sticky to navElement 
        navElement.classList.add("sticky");
    }else{
        // removing class sticky from navElement-
        navElement.classList.remove("sticky");
    }  
}



