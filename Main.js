function PageAnimation() {
  const anim = gsap.timeline();

  anim
    .from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 2,
      ease: Expo.easeInout,
    })
    .to(".boundingELm", {
      x: 0,
      ease: Expo.easeInout,
      duration: 1,
      delay: -1,
      stagger: 0.4,
    })
    .from("#hero-footer", {
      x: -20,
      opacity: 0,
      duration: 1,
      delay: -0.5,
      ease: Expo.easeInout,
    });
}
function MouseFollower() {
  window.addEventListener("mousemove", function (detail) {
    document.getElementById(
      "mini-circle"
    ).style.transform = `translate(${detail.clientX}px, ${detail.clientY}px)`;
    // console.log(detail);
  });
}
MouseFollower();
PageAnimation();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mousemove", function (detail) {
    diffrot = detail.clientX - rotate;
    rotate = detail.clientX;

    // console.log(detail.clientY - elem.getBoundingClientRect);
    // console.log(detail.clientY - elem.getBoundingClientRect().top);
    var diff = detail.clientY - elem.getBoundingClientRect().top;
    // elem.querySelector("img").style.display = none;
    gsap.to(elem.querySelectorAll(".img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: detail.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
    });
    console.log("Hello");
  });

  elem.addEventListener("mouseleave", function (detail) {
    var diff = detail.clientY - elem.getBoundingClientRect().top;

    gsap.to(elem.querySelectorAll(".img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
    console.log("Hello");
  });
});

function timeDate() {
  // Create a new Date object
  const timefix = document.getElementById("time");
  const yearfix = document.getElementById("year");
  var currentDate = new Date();

  // Get the current date
  var date = currentDate.toDateString();
  //  Get the current Year
  var Year = currentDate.getFullYear();

  // Get the current time
  var time = currentDate.toLocaleTimeString();
  timefix.innerHTML = time;
  yearfix.innerHTML = Year;

  // Display the current date and time
  console.log("Current Date: " + date);
  console.log("Current Year: " + Year);
  console.log("Current Time: " + time);
}
timeDate();
