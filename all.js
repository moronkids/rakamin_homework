// Responsive Megamenu
const navModal = document.getElementById("navmodal");
const openMenu = document.getElementById("openmenu");
const closeMenu = document.getElementById("closemenu");
const main = document.querySelector("main");

if(openMenu) {
  // Open Megamenu and Make Main Fixed Position
  openMenu.addEventListener("click", function () {
    navModal.classList.add("active");
    main.classList.add("fixed");
  });

}
if(closeMenu) {

  // Close Megamenu and Remove Main Fixed Position
  closeMenu.addEventListener("click", function () {
    navModal.classList.remove("active");
    main.classList.remove("fixed");
  });
}
$(function () {
  $(".flipster").flipster({
    itemContainer: "ul", // Container for the flippin' items.
    itemSelector: "li", // Selector for children of itemContainer to flip
    style: "coverflow", // Switch between 'coverflow' or 'carousel' display styles
    start: "center", // Starting item. Set to 0 to start at the first, 'center' to start in the middle or the index of the item you want to start with.

    enableKeyboard: true, // Enable left/right arrow navigation
    enableMousewheel: true, // Enable scrollwheel navigation (up = left, down = right)
    enableTouch: true, // Enable swipe navigation for touch devices

    enableNav: false, // If true, flipster will insert an unordered list of the slides
    enableNavButtons: false, // If true, flipster will insert Previous / Next buttons

    onItemSwitch: function () { }, // Callback function when items are switches
  });
});

const toggleSwitch = document.querySelector('.duar input[type="checkbox"]');
const currentTheme = localStorage.getItem("theme");
if(toggleSwitch) {
  toggleSwitch.addEventListener("change", switchTheme, false);
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
    }
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    if (document.getElementsByClassName("switchx")[0].textContent == "Hex Color")
    {
      hex();
    } else {
      $(".card-body").addClass("dark-mode");
      $(".bg-dark").addClass("lgrey");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  } else {
    if (document.getElementsByClassName("switchx")[0].textContent == "Hex Color"){
      document.body.style.backgroundColor = "";
      $(".bg-dark").removeClass("lgrey");
      $(".card-body").removeClass("dark-mode");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    else {
      $(".bg-dark").removeClass("lgrey");
      $(".card-body").removeClass("dark-mode");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }
}
function hex(){
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  // const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
  let button = document.getElementById('btn');
  // console.log("masuk");
  function randCol() {
    var colArr = [];
    for (var i = 0; i < 6; i++) {
      const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      var rand = colors[Math.floor(Math.random() * 16)];
      colArr.push(rand);
    }
    return "#" + colArr.join("")
  }
  // button.addEventListener("click", function () {
  //   console.log("masuk");
    // document.getElementById("demo").innerHTML = "Hello World";
    let random = randCol();
    console.log(random)
    document.body.style.backgroundColor = random;
    document.getElementsByClassName('color')[0].innerHTML = random
  // });
}


function x() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function switchx() {
  // alert("diar");
  if (
    document.getElementsByClassName("switchx")[0].textContent == "Hex Color"
  ) {
    document.getElementsByClassName("switchx")[0].textContent =
      "Enable Dark Modes!";
  } else {
    document.getElementsByClassName("switchx")[0].textContent = "Hex Color";
  }
}

// document.getElementsByClassName('switchtype').addEventListener('click', function(){
//   alert("diar")
// })

window.onscroll = function (e) {
  if (window.scrollY == 0) {
    //user scrolled to the top of the page
    $(".navbar").removeClass("bbot");
  } else {
    $(".navbar").addClass("bbot");
  }
};


// console.log(email, pass);

$("#email").change(function(){
  var email = $('#email').val();
  // var pass = $('#pass').val();
  if(email != '') {

    $('#email').addClass('has-val')
  }
  else {
    $('#email').removeClass('has-val')

  }
})
$("#pass").change(function(){
  var email = $('#pass').val();
  // var pass = $('#pass').val();
  if(email != '') {

    $('#pass').addClass('has-val')
  }
  else {
    $('#pass').removeClass('has-val')

  }
})

document.getElementById('buttonlgn').addEventListener('click', function() {
  var email = $('#email').val();
  var pass = $('#pass').val();
  // console.log(email, email, "test")
  // alert(email, email)
  if (email != '' && pass != '') {
    // alert('masuk');

    setTimeout(function () { window.location.href = "index.html" }, 0);
    setTimeout(function () { alert("Welcome to our Web!") }, 2500);
  }
  else {
    alert('input email and password!')
  }

})
