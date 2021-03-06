const link = document.querySelectorAll('.header__item-link');
const about = document.querySelector('#about');
const resume = document.querySelector('#resume');
const works = document.querySelector('#works');
const contact = document.querySelector('#contact');
let listen = [about, resume, works, contact];

link.forEach(item => item.addEventListener('click', (e) => {
  if (e.target.classList.contains('header__item-link') || e.target.classList.contains('fa') ) {
    link.forEach(item => item.parentElement.classList.remove('header__item--active'));
    let act;
    if (e.target.classList.contains('fa')) {
      e.target.parentElement.parentElement.classList.add('header__item--active');
      act = e.target.parentElement.textContent.trim();
    } else {
      e.target.parentElement.classList.add('header__item--active');
      act = e.target.textContent.trim();
    }
    console.log(act);
    listen.map(item => item.classList.remove('card-inner--active'));
    if (act == 'About') about.classList.add('card-inner--active');
    else if (act == 'Resume') resume.classList.add('card-inner--active');
    else if (act == 'Works') works.classList.add('card-inner--active');
    else if (act == 'Contact') contact.classList.add('card-inner--active');
  }
}))