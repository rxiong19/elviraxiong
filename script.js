function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function aboutMe() {
  // Source code from: https://tobiasahlin.com/moving-letters/#1
  var textWrapper = document.querySelector(".ml1 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml1 .letter",
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 500,
      delay: (el, i) => 150 * (i + 1),
    })
    .add({
      targets: ".ml1 .line",
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=875",
      delay: (el, i, l) => 100 * (l - i),
    })
    .add({
      targets: ".ml1",
      opacity: 1,
      duration: 2000,
      easing: "easeOutExpo",
      delay: 20000,
    });
}

function experience() {
  // Source code from: https://tobiasahlin.com/moving-letters/#11
  var textWrapper = document.querySelector(".ml11 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml11 .line",
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 500,
    })
    .add({
      targets: ".ml11 .line",
      translateX: [
        0,
        document.querySelector(".ml11 .letters").getBoundingClientRect().width +
          10,
      ],
      opacity: [0.9, 0.7, 0.5, 0.3, 0.2, 0],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100,
    })
    .add({
      targets: ".ml11 .letter",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 500,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1),
    })
    .add({
      targets: ".ml11",
      opacity: 1,
      duration: 800,
      easing: "easeOutExpo",
      delay: 10000,
    });

  const timelineStick = document.querySelector(".timeline-stick");
  timelineStick.style.height = "0%";
  anime({
    targets: timelineStick,
    height: "100%",
    easing: "easeOutExpo",
    duration: 10000,
  });
}

function projects() {
  // use code from: https://tobiasahlin.com/moving-letters/#4
  var textWrapper = document.querySelector(".ml13");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  //   const button = document.getElementById("change-layout-btn");
  //   button.style.opacity = 0;
  //   button.style.pointerEvents = "none";

  anime.timeline({ loop: false }).add({
    targets: ".ml13 .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 800,
    delay: (el, i) => 300 + 30 * i,
  });
  // .add({
  //   targets: "#change-layout-btn",
  //   opacity: [0, 0.5, 1],
  //   duration: 100,
  //   easing: "easeOutQuad",
  //   complete: () => {
  //     button.style.pointerEvents = "auto";
  //   },
  // });

  //   button.addEventListener("click", changeProjectSettings);
  const projectsTitle = document.querySelector(".projects-title");
  projectsTitle.classList.add("final-state");
  const swiperSection = document.querySelector(".swiper");

  swiperSection.classList.remove("hidden");

  if (!swiperSection.swiper) {
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
function changeProjectSettings() {
  const projectsTitle = document.querySelector(".projects-title");
  projectsTitle.classList.add("final-state");

  const button = document.getElementById("change-layout-btn");
  button.style.display = "none";
}

function contact() {
  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml8 .circle-white",
      scale: [0, 1.5],
      opacity: [1, 0],
      easing: "easeInOutExpo",
      rotateZ: 360,
      duration: 1100,
    })
    .add({
      targets: ".ml8 .circle-container",
      scale: [0, 1],
      duration: 1100,
      easing: "easeInOutExpo",
      offset: "-=1000",
    })
    .add({
      targets: ".ml8 .circle-dark",
      scale: [0, 1],
      duration: 1100,
      easing: "easeOutExpo",
      offset: "-=600",
    })
    .add({
      targets: ".ml8 .letters-left",
      scale: [0, 1],
      duration: 1200,
      offset: "-=550",
    })
    .add({
      targets: ".ml8 .bang",
      scale: [0, 1],
      rotateZ: [45, 15],
      duration: 1200,
      offset: "-=1000",
    })
    .add({
      targets: ".ml8",
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1400,
    });

  anime({
    targets: ".ml8 .circle-dark-dashed",
    rotateZ: 360,
    duration: 8000,
    easing: "linear",
    loop: true,
  });
}

document.querySelector('a[href="#about"]').addEventListener("click", aboutMe);
document
  .querySelector('a[href="#experience"]')
  .addEventListener("click", experience);
document
  .querySelector('a[href="#projects"]')
  .addEventListener("click", projects);
document.querySelector('a[href="#contact"]').addEventListener("click", contact);

function animateSection(section) {
  if (section.id === "about") {
    aboutMe();
  } else if (section.id === "experience") {
    experience();
  } else if (section.id === "projects") {
    projects();
  } else if (section.id === "contact") {
    contact();
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSection(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  observer.observe(section);
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
