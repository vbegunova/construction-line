const titleBox = document.querySelector(".hero .title-box .list");
const titles = document.querySelectorAll(".hero .title-box .item");
let currentTitle = 0;
const dotsContainer = document.querySelectorAll(".hero .slider-dots");

const titleSlideWidth = titles[0].offsetWidth;

dotsContainer.forEach((container) => {
  titles.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    setActiveDot(currentTitle);
    dot.addEventListener("click", () => {
      currentTitle = index;
      setActiveDot(currentTitle);
      changeTitle(currentTitle);
    });
    container.appendChild(dot);
  });
});

if (window.innerWidth < 1440) {
  setInterval(() => {
    currentTitle++;
    if (currentTitle >= titles.length) {
      currentTitle = 0;
    }
    setActiveDot(currentTitle);
    changeTitle(currentTitle);
  }, 5000)
}

function setActiveDot(index) {
  const dots = document.querySelectorAll(".hero .mobile .dot");
  const dotsDesk = document.querySelectorAll(".hero .desktop .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
  dotsDesk.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function changeTitle(index) {
  titleBox.style.transition = "transform 0.4s ease-in-out";
  if (window.innerWidth < 1440) {
    titleBox.style.transform = `translateX(-${index * titleSlideWidth + 35 * index}px)`;
  } else {
    titleBox.style.transform = `translateX(-${index * titleSlideWidth + 35 * index}px)`;
  }
}

function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

  // Проверяем, виден ли элемент полностью
  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

  return (vertInView && horInView);
}

function animateNumber(finalNumber, elementId, duration = 2000, startNumber = 0) {
  const element = document.getElementById(elementId);

  let started = false;

  function startAnimation() {
    if(started) return;
    if(isElementVisible(element)) {
      let startTime = null;
      
      function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        element.innerText = Math.floor(progress * (finalNumber - startNumber) + startNumber);
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      }
      
      started = true;
      requestAnimationFrame(animation);
    }
  }

  window.addEventListener('scroll', startAnimation);

  startAnimation();
}

animateNumber(20, 'first-num');
animateNumber(400, 'second-num');
animateNumber(1400, 'third-num');
animateNumber(55, 'fourth-num');