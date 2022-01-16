const ScrollTrigger = () => {
  const trigger = document.querySelectorAll(".animation");
  document.addEventListener("scroll", function() {
    for (let i = 0; i < trigger.length; i++) {
      const element = trigger[i].getBoundingClientRect().top + trigger[i].clientHeight * .5
      if (window.innerHeight > element) {
        trigger[i].classList.add("show");
      }
    }
  })
}
ScrollTrigger();


const smoothScroll = () => {
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;// window.pageYOffset・・・スクロール量を取得
      const gap = 60;// 固定ヘッダー分の高さ
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }  
}
smoothScroll();


const loading = () => {
  window.onload = function() {
    const load = document.getElementById('loading');
    load.classList.add('loaded');
  }  
}
loading();


const menu = () => {
  window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
    blackBg.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  };
}
menu();