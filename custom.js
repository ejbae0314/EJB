// splash

gsap.timeline().to("#splash", { x: 2000, duration: 5, delay: 2 });

gsap.from("#splash p", {
  x: -200,
  opacity: 0,
  duration: 2,
  ease: "elastic.out",
});

// header가 마지막 부분에서 사라짐

$(window).on("scroll", function () {
  let pos = $(window).scrollTop();

  let wrapEnd = $(".wrap").offset().top + $(".wrap").outerHeight();

  let winH = $(window).height();

  if (pos + winH >= wrapEnd + 500) {
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
});

// 비주얼 단어 움직임

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".visual",
      start: "0% 0%",
      end: "+=2000",
      //   top = 0%, bottom = 100%, center = 50%
      scrub: 2,
      pin: true,
      // markers: true,
    },
  })
  .to(".visual div p", { x: 1600, duration: 1 }, 0)
  .to(".visual div h2", { x: 1600, duration: 1 }, 1);

// sec01 로고 움직임

gsap.to(".sec01 ul", {
  xPercent: -50,
  duration: 20,
  ease: "none",
  repeat: -1,
});

// sec04 움직임

gsap.to(".sec04 ul", {
  xPercent: -50,
  duration: 20,
  ease: "none",
  repeat: -1,
});

// sec06 숫자 올라감

let played = false;

$(window).on("scroll", function () {
  let opacity = $(".sec06").css("opacity");

  if (opacity > 0.8 && !played) {
    played = true;

    let num01 = 0;
    let num02 = 0;
    let num03 = 0;
    let num04 = 0;
    let num05 = 0;
    let num06 = 0;
    let num07 = 0;
    let num08 = 0;
    let num09 = 0;
    let num10 = 0;
    let num11 = 0;

    let end01 = 47902;
    let end02 = 3100;
    let end03 = 2300;
    let end04 = 32000;
    let end05 = 1155;
    let end06 = 97;
    let end07 = 300200;
    let end08 = 1100;
    let end09 = 256;
    let end10 = 341;
    let end11 = 76;

    let count = 0;

    let timer = setInterval(function () {
      count++;

      num01 += 479;
      num02 += 31;
      num03 += 23;
      num04 += 320;
      num05 += 11;
      num06 += 1;
      num07 += 300;
      num08 += 11;
      num09 += 2;
      num10 += 3;
      num11 += 1;

      $(".sec06 span.view").text(Math.floor(num01).toLocaleString());

      $(".sec06 span.like").text(Math.floor(num02).toLocaleString());
      $(".sec06 span.click").text(Math.floor(num03).toLocaleString());
      $(".sec06 span.threeSec").text(Math.floor(num04).toLocaleString());
      $(".sec06 span.read").text(Math.floor(num05).toLocaleString());
      $(".sec06 span.mobile").text(Math.floor(num06).toLocaleString());
      $(".sec06 span.view2").text(Math.floor(num07).toLocaleString());
      $(".sec06 span.like2").text(Math.floor(num08).toLocaleString());
      $(".sec06 span.follower").text(Math.floor(num09).toLocaleString());
      $(".sec06 span.view3").text(Math.floor(num10).toLocaleString());
      $(".sec06 span.nonfollower").text(Math.floor(num11).toLocaleString());

      if (count >= 100) {
        $(".sec06 span.view").text(end01.toLocaleString());

        $(".sec06 span.like").text(end02.toLocaleString());
        $(".sec06 span.click").text(end03.toLocaleString());
        $(".sec06 span.threeSec").text(end04.toLocaleString());
        $(".sec06 span.read").text(end05.toLocaleString());
        $(".sec06 span.mobile").text(end06.toLocaleString());
        $(".sec06 span.view2").text(end07.toLocaleString());
        $(".sec06 span.like2").text(end08.toLocaleString());
        $(".sec06 span.follower").text(end09.toLocaleString());
        $(".sec06 span.view3").text(end10.toLocaleString());
        $(".sec06 span.nonfollower").text(end11.toLocaleString());

        clearInterval(timer);
      }
    }, 20);
  }
});

// sec09 POE 박스 안에 들어가기

let sec09Played = false;

$(window).on("scroll", function () {
  let pos = $(window).scrollTop();
  let winH = $(window).height();

  let sec09Top = $(".sec09").offset().top;

  // sec09 등장

  if (!sec09Played && pos + winH * 0.8 >= sec09Top) {
    sec09Played = true;

    gsap.fromTo(
      ".sec09 .table td div",
      {
        y: -200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "back.out(1.7)",
      },
    );
  }
});

// 폴더 올라옴

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".folder",
      start: "0% 0%",
      end: "+=8000",
      //   top = 0%, bottom = 100%, center = 50%
      scrub: 2,
      pin: true,
      pinSpacing: true,
      // markers: true,
    },
  }) //뒤에 생성되는 ; 지워야함

  //from에는 y값, to에는 opacity:1
  .fromTo(".folder .sec02", { y: 400, duration: 10 }, { y: 0, opacity: 1 }, 0.5)
  //뒤에 생성되는 ; 지워야함
  .fromTo(".folder .sec03", { y: 400 }, { y: 0, opacity: 1, duration: 1 }, 4)
  .fromTo(".folder .sec04", { y: 400 }, { y: 0, opacity: 1, duration: 1 }, 8)
  .fromTo(".folder .sec05", { y: 400 }, { y: 0, opacity: 1, duration: 1 }, 12)
  .fromTo(".folder .sec06", { y: 400 }, { y: 0, opacity: 1, duration: 1 }, 16)
  .fromTo(".folder .sec07", { y: 400 }, { y: 0, opacity: 1, duration: 1 }, 20)
  .fromTo(".folder .sec08", { y: 400 }, { y: 0, opacity: 1, duration: 2 }, 24);

// 스크롤

$(window).on("scroll", function () {
  let pos = $(window).scrollTop();
  let winH = $(window).height();

  let sec01Top = $(".sec01").offset().top;

  let sec10Top = $(".sec10").offset().top;

  let contentsEnd = $(".wrap").offset().top + $(".wrap").outerHeight();

  if (pos + winH >= contentsEnd) {
    $("footer").css({
      visibility: "visible",
    });
  } else {
    $("footer").css({
      visibility: "hidden",
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
