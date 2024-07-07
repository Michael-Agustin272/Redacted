let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=> {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +'] ').classList.add('active');
            })
        }
    })
}

const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('swipe-to-left');
        }
        /*else {
            entry.target.classList.remove('showLeft');
        }*/
        

    });
});

const hiddenElementsLeft = document.querySelectorAll("main-header");
hiddenElementsLeft.forEach((el)=> observerLeft.observe(el));

const observerSubHeader = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('swipe-to-left');
        }
        /*else {
            entry.target.classList.remove('showLeft');
        }*/
        

    });
});

const hiddenElementSubHeader = document.querySelectorAll("main-header");
hiddenElementSubHeader.forEach((el)=> observerLeft.observe(el));



