
// PREVENT SCROLL ON MODAL-OPEN
function disableScroll() {
    document.body.style.position  = "fixed";
    document.body.style.width  = "100vw";
    // document.body.style.overflowY  = "hidden";
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}




//Add smooth scrolling when clicking any anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//<a href="#someOtherElementID"> Go to Other Element Smoothly </a>


// Onload alert message
// function myFunction() {
//   alert("Use Google Chrome for best experience on Styley");
// }

// Hide onload modal onclick
const targetDiv = document.getElementById("myModal");
const btn = document.getElementById("toggle");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};








