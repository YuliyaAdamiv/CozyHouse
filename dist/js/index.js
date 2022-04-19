var swiper = new Swiper('.mySwiper', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');
const body = document.querySelector('.content');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu);
});
$(document).ready(function () {
  $(window).scroll(function () {
    $('.header-inner').toggleClass('active', $(window).scrollTop() > 20);
    $('.menu').toggleClass('active', $(window).scrollTop() > 20);
    $('.menu-icon').toggleClass('logo-active', $(window).scrollTop() > 20);
    $('.close-icon').toggleClass('logo-active', $(window).scrollTop() > 20);
    $('.text-logo').toggleClass('logo-active', $(window).scrollTop() > 20);
    $('.nav-item').toggleClass('active', $(window).scrollTop() > 20);
  });
});
function validate_creditcardnumber() {
  var re16digit = /^\d{16}$/;
  if (document.myform.CreditCardNumber.value.search(re16digit) == -1)
    alert('Please enter your 16 digit credit card numbers');
  return false;
}

document.myform.CreditCardNumber.onchange = validate_creditcardnumber;
