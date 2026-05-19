// sec01 로고 움직임

gsap.to(".sec01 ul", {
  xPercent: -50,
  duration: 20,
  ease: "none",
  repeat: -1,
});

//sec02 사진들 올라옴

gsap.set(".sec02 li", {
  y: 200,
  opacity: 0,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sec01",
      start: "bottom 80%",
      end: "bottom 20%",
      scrub: 2,
      //   markers: true,
    },
  })
  .to(
    ".sec02 li:nth-child(1)",
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    0.2,
  )

  .to(
    ".sec02 li:nth-child(2)",
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    0.4,
  )

  .to(
    ".sec02 li:nth-child(3)",
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    0.6,
  );

//sec03 사진 커짐
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sec03",
      start: "-40% -40%",
      end: "0% 0%",
      scrub: 3,
      // markers: true,
    },
  })
  .fromTo(
    ".sec03 .imageBox img",
    {
      "clip-path": "inset(60% 60% 60% 60% round 30%)",
    },
    {
      "clip-path": "inset(0% 0% 0% 0% round 0%)",
    },
  );

//sec04 사진 커짐
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sec06",
      start: "-40% -40%",
      end: "0% 0%",
      scrub: 3,
      // markers: true,
    },
  })
  .fromTo(
    ".sec06 .imageBox img",
    {
      "clip-path": "inset(60% 60% 60% 60% round 30%)",
    },
    {
      "clip-path": "inset(0% 0% 0% 0% round 0%)",
    },
  );

// sec08 로고 움직임

const track = document.querySelector(".sec08 ul");

track.innerHTML += track.innerHTML;
track.innerHTML += track.innerHTML;

const sec08Width = track.scrollWidth / 4;

// 시작 위치
gsap.set(track, {
  x: -sec08Width,
});

// 오른쪽으로 이동
gsap.to(track, {
  x: 0,
  duration: 20,
  ease: "linear",
  repeat: -1,
});
// 스크롤

$(window).on("scroll", function () {
  let pos = $(window).scrollTop();
  let winH = $(window).height();

  let sec01Top = $(".sec01").offset().top;

  let sec10Top = $(".sec07").offset().top;

  let contentsEnd = $("#contents").offset().top + $("#contents").outerHeight();

  // header 마지막 부분에서 사라짐
  if (pos + winH >= contentsEnd - 200) {
    $("header").css({
      opacity: 0,
      pointerEvents: "none",
    });
  } else {
    $("header").css({
      opacity: 1,
      pointerEvents: "auto",
    });
  }

  // top

  if (pos >= sec01Top) {
    $(".top").css({
      opacity: 1,
      pointerEvents: "auto",
    });
  } else {
    $(".top").css({
      opacity: 0,
      pointerEvents: "none",
    });
  }

  // top색상변경

  if (pos >= sec10Top) {
    $(".top").addClass("footer_mode");
    console.log("footer mode ON");
  } else {
    $(".top").removeClass("footer_mode");
  }
});

// input해서 이메일로
emailjs.init("xwVu_s-T6B6aeEqC3");

const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .send("service_zzf8rbk", "template_vepr0zb", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      country: document.getElementById("country").value,
      city: document.getElementById("city").value,
    })
    .then(() => {
      alert("메일 전송 완료!");
      form.reset();
    })
    .catch((error) => {
      console.log(error);
      alert("메일 전송 실패");
    });
});
