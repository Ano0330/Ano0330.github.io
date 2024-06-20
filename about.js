gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    scrub: true,
    pin: true,
    start: "center center",
    end: "bottom -100%",
    toggleClass: {
      targets: ".hero__headline",
      className: "active"
    },
    ease: "power2"
  }
});

gsap.to(".hero__image", {
  scrollTrigger: {
    trigger: ".hero",
    scrub: 0.5,
    start: "top bottom",
    end: "bottom -300%",
    ease: "power2"
  },
  y: "-30%"
});

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 3, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });

  gsap.timeline({
    scrollTrigger: {
        trigger: ".grid-container",
        start: "top top",
        end: () => innerHeight * 4,
        scrub: 2,  // 增加scrub的值以放慢滚动时的动画
        pin: ".grid",
        anticipatePin: 1
    }
})
.set(".gridBlock:not(.centerBlock)", {autoAlpha: 0})
.to(".gridBlock:not(.centerBlock)", {duration: 0.1, autoAlpha: 1}, 0.001)
.from(".gridLayer", {
    scale: 3.3333,
    ease: "none",
    duration: 5 // 增加duration的值以放慢放大缩小的动画
});

// 等待文檔加載完畢後執行
document.addEventListener("DOMContentLoaded", function() {
    const carouselContent = document.querySelector(".carousel-content");
    const spans = carouselContent.querySelectorAll("span");
  
    // 複製文字內容以實現無限輪播
    spans.forEach(span => {
      const cloneSpan = span.cloneNode(true);
      carouselContent.appendChild(cloneSpan);
    });
  });
  