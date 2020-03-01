const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slideIn');
const sliderImg = document.querySelectorAll('.slideInImg');

const appearOptions = {
    threshold: 0
};

const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);

        }
    })
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})

sliderImg.forEach(slider => {
    appearOnScroll.observe(slider)
})


//--------------------------------------------------------

const stickyContainers = document.querySelectorAll('.sticky-container');
const stickyOptions = {
  rootMargin: '0px 0px -100% 0px',
  threshold: 0
};
const stickyItems = new IntersectionObserver(addSticky, stickyOptions);

stickyContainers.forEach(element => {
  stickyItems.observe(element);
  console.log('i hit the top')
});

function addSticky (entries, observer) {
  entries.forEach(entry => {
    entry.target.classList.toggle('active', entry.isIntersecting);
    console.log('i also hit the top')
  });
}

