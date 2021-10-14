// nav bar scroll :
window.addEventListener("scroll",() => {
    const nav = document.querySelector('nav');
    nav.classList.toggle("sticky",window.scrollY > 0);
    nav.classList.remove("open",window.scrollY > 0)
})

if (window.location.pathname+window.location.hash == '/index.html#contact') {
    console.log('Viewing contact form');
}


// navbar for mobile version :
let nav = document.querySelector("nav");
let humb = document.querySelector("nav .hamb");

humb.addEventListener("click",openNav);

function openNav(){
    nav.classList.toggle("open")
}



// scroll to element of the page :
let navLinks = document.querySelectorAll(".scroll-link li a");

navLinks.forEach((link) => {
    link.addEventListener("click",(e) => {
        e.preventDefault();
        let targetId = link.getAttribute("data-link");
        let imgHeight = document.querySelector(".about .img-box img").offsetHeight;
        let margin ;
        if (targetId===`about` && window.innerWidth<700) {
           // margin=80-imgHeight;
           margin=-imgHeight+20
            console.log(imgHeight)
        } else {
            margin=80
        }
        window.scrollTo({
            top: document.getElementById(targetId).offsetTop-margin,
            behavior : "smooth"
        });
        nav.classList.remove("open");
    })
})



// Testemunhos : 
let singleTestemunhos = document.querySelector(".single-testemunhos");
let slides = document.querySelector('.testemunhos-area')
let allTtestemunhos = document.querySelectorAll('.single-testemunhos');
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let size = slides.clientWidth ;
let index =0;
let arr;

arr = allTtestemunhos.length 
nextBtn.addEventListener('click',slideNext);
prevBtn.addEventListener('click',slidePrev);

function slideNext() {
    
    slides.style.transform = "translateX("+(-size - index*size)+"px)";
    index++;
    if(index > 0){
        prevBtn.style.display = "flex";
    }
    if (index === arr-1) {
        nextBtn.style.display = "none";
    }
}

function slidePrev() {
    index--;
    slides.style.transform = "translateX("+(-index*size)+"px)";
    if (index < arr-1) {
        nextBtn.style.display= "flex";
    }
    if (index === 0) {
        prevBtn.style.display = "none";
    }
}



// scroll to tutorial :
let tutorialLinks = document.querySelector("#tutorialLink");
let targetId = tutorialLinks.getAttribute("data-link");
let video = document.querySelector("#tutorial");

tutorialLinks.addEventListener("click",(e) => {
    window.scrollTo({
        top: document.getElementById(targetId).offsetTop-60,
        behavior : "smooth"
    });
    video.play();
})


// auto play videos
jQuery(document).ready(function(){ 

    var media = jQuery('video').not("[autoplay='autoplay']");
    var tolerancePixel = 40;

    function checkMedia(){
        var scrollTop = jQuery(window).scrollTop() + tolerancePixel;
        var scrollBottom = jQuery(window).scrollTop() + jQuery(window).height() - tolerancePixel;

        media.each(function(index, el) {
            var yTopMedia = jQuery(this).offset().top;
            var yBottomMedia = jQuery(this).height() + yTopMedia;

            if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ 
                jQuery(this).get(0).play();
            } else {
                jQuery(this).get(0).pause();
            }
        });

        //}
    }
    jQuery(document).on('scroll', checkMedia);
});

// change icons + and -
$('.card-header').click(function() { 
    $(this).find('i').toggleClass('fas fa-plus fas fa-minus'); 
}); 