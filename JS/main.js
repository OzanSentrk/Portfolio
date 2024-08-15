 let menuIcon=document.querySelector('#menu-icon');
 let navBar=document.querySelector('.nav-bar');


 menuIcon.onClick = () =>{  
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');
 }
 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');

 window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
 };

 ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
 });

ScrollReveal().reveal('.home .content,heading' ,{origin:'top'});
ScrollReveal().reveal('.home .img, .services-container, .portfolio-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .abut-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{origin:'right'});

const typed = new Typed('.multiple-text',
{
    strings: ['Frontend Developer','Software Engineer','Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay:1000,
    loop: true,
});
document.getElementById('CalorieCrafterBtn').addEventListener('click', function(){
    window.open('https://github.com/OzanSentrk/CalorieCrafter', '_blank');
});