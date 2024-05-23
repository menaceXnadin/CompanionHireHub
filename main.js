document.addEventListener("DOMContentLoaded", function () {

  const drpdwnbtn = document.getElementById("user-login");
  const drpdwnmenu = document.getElementById("dropdown-content");
  
  drpdwnbtn.addEventListener("click", function () {
    console.log('button clicked');
    if (drpdwnmenu.style.display === "none" || getComputedStyle(drpdwnmenu).display === "none") {
      drpdwnmenu.style.display = "block";
    } else {
      drpdwnmenu.style.display = "none";
    }
  });
});

// view for signup
let show = document.querySelector("#show")
let view = document.querySelector("#view")
let confirmPassword = document.querySelector("#confirmPassword")
let password = document.querySelector("#password")
show.addEventListener("click", function(){
this.classList.toggle("fa-eye");
let type = confirmPassword.getAttribute("type") ==="password"?"text" : "password";
confirmPassword.setAttribute("type",type);
})
view.addEventListener("click", function(){
  this.classList.toggle("fa-eye");
  let types = password.getAttribute("type") ==="password"?"text" : "password";
  password.setAttribute("type",types);
  })

// form validation for signup
function validateForm() {
  var firstname = document.getElementById("firstname").value.trim();
  var lastname = document.getElementById("lastname").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var isValid = true;

  // Clear previous error messages
  document.getElementById("error-firstname").innerHTML = "";
  document.getElementById("error-lastname").innerHTML = "";
  document.getElementById("error-email").innerHTML = "";
  document.getElementById("error-password").innerHTML = "";
  document.getElementById("error-confirmPassword").innerHTML = "";

  // Check if first name is empty
  if (firstname === "") {
    document.getElementById("error-firstname").innerHTML =
      "Please enter your first name.";
    isValid = false;
  }

  // Check if last name is empty
  if (lastname === "") {
    document.getElementById("error-lastname").innerHTML =
      "Please enter your last name.";
    isValid = false;
  }

  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("error-email").innerHTML = "Invalid email address.";
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("error-password").innerHTML =
      "Password must be at least 6 characters long.";
    isValid = false;
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    document.getElementById("error-confirmPassword").innerHTML =
      "Passwords do not match.";
    isValid = false;
  }
  if (isValid == true) {
    alert("Signup Successful");
    window.location.href = "index.html";
  }
  // Return false if any validation failed
}


// swiper js
document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000, // Set the delay in milliseconds (e.g., 5000 for 5 seconds): false,
    },
  });
});

// for dropdown for login signup
  // const drpdwnbtn = document.getElementById("user-login");
  // const drpdwnmenu = document.getElementById("dropdown-content");
  // drpdwnbtn.addEventListener("click", () => {
  //   if (drpdwnmenu.style.display === "none") {
  //     drpdwnmenu.style.display = "block";
  //   } else {
  //     drpdwnmenu.style.display = "none";
  //   }
  // });





