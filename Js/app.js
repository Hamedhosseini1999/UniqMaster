// Hamed's Code
// Navbar on scroll
window.addEventListener("scroll", function () {
  const navbar = this.document.getElementById("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
// Nav Slide
const navSlide = function () {
  const burger = document.querySelector(".ham");
  const list = document.querySelector(".list-container");
  const logo = document.querySelector(".logo a img");
  const navItem = document.querySelectorAll(".list li");
  const dots = document.querySelector(".dots");
  const socialList = document.querySelector(".multi");
  const close = document.querySelector(".close-times");

  close.addEventListener("click", function () {
    list.classList.toggle("active");
    navItem.forEach(function (item, index) {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `fadeLink 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });

  dots.addEventListener("click", function () {
    socialList.classList.toggle("active");
  });

  burger.addEventListener("click", function () {
    list.classList.toggle("active");
    burger.classList.toggle("active");

    navItem.forEach(function (item, index) {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `fadeLink 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};
// Slide Image
function slideImage() {
  // Show Image
  const FeaturesItem = document.querySelectorAll(".feature-btn");
  const img = document.querySelector(".feature-img img");
  const imgData = document.querySelectorAll(".feature-btn");

  let dataSrc = [];
  let i = 0;

  // Get srcs of image
  imgData.forEach((data) => {
    let src = data.dataset.src;
    dataSrc.push(src);
  });

  FeaturesItem.forEach((item) => {
    item.addEventListener("mouseover", () => {
      img.classList.add("active");
      img.style.animation = "clip 1s ease forwards";
      img.src = item.dataset.src;
    });
  });

  FeaturesItem.forEach((item) => {
    item.addEventListener("mouseout", () => {
      img.classList.remove("active");
      img.style.animation = "";
    });
  });
}
// Responsive size
// const road = document.querySelector(".road-img");
// let x = window.matchMedia("(max-width:790px)");
// function imgRoad(size) {
//   if (size.matches) {
//     road.src = "images/road/road 2.png";
//   } else {
//     road.src = "images/road/road.png";
//   }
// }
// imgRoad(x);
// x.addListener(imgRoad);

// App
const app = (function () {
  navSlide();
  slideImage();
})();

/********  Ali's Codes ************/
//For Mobina
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
//For Ali
function myFunctionAli() {
  var dotsAli = document.getElementById("dotsAli");
  var moreTextAli = document.getElementById("moreAli");
  var btnTextAli = document.getElementById("myBtnAli");

  if (dotsAli.style.display === "none") {
    dotsAli.style.display = "inline";
    btnTextAli.innerHTML = "Read more";
    moreTextAli.style.display = "none";
  } else {
    dotsAli.style.display = "none";
    btnTextAli.innerHTML = "Read less";
    moreTextAli.style.display = "inline";
  }
}
//For Farzam
function myFunctionFarzam() {
  var dotsFarzam = document.getElementById("dotsFarzam");
  var moreTextFarzam = document.getElementById("moreFarzam");
  var btnTextFarzam = document.getElementById("myBtnFarzam");

  if (dotsFarzam.style.display === "none") {
    dotsFarzam.style.display = "inline";
    btnTextFarzam.innerHTML = "Read more";
    moreTextFarzam.style.display = "none";
  } else {
    dotsFarzam.style.display = "none";
    btnTextFarzam.innerHTML = "Read less";
    moreTextFarzam.style.display = "inline";
  }
}
//For Hirad
function myFunctionHirad() {
  let dotsHirad = document.getElementById("dotsHirad");
  let moreTextHirad = document.getElementById("moreHirad");
  let btnTextHirad = document.getElementById("myBtnHirad");

  if (dotsHirad.style.display === "none") {
    dotsHirad.style.display = "inline";
    btnTextHirad.innerHTML = "Read more";
    moreTextHirad.style.display = "none";
  } else {
    dotsHirad.style.display = "none";
    btnTextHirad.innerHTML = "Read less";
    moreTextHirad.style.display = "inline";
  }
}
