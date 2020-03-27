/*------------JS for fade in and slide in effects------*/

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slideIn');
const sliderImg = document.querySelectorAll('.slideInImg');

// Options for fade/slide effects

const appearOptions = {
    threshold: 0
};

// Set up for Intersection Observer

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
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

// forEach loops to check for Intersection Observer

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})

sliderImg.forEach(slider => {
    appearOnScroll.observe(slider)
})


/*----------JS for Sticky Headers-------------*/

const stickyContainers = document.querySelectorAll('.sticky-container');

// Options for Sticky Bar

const stickyOptions = {
  rootMargin: '0px 0px -100% 0px',
  threshold: 0  
};

// set up for Intersection Observer

const stickyItems = new IntersectionObserver(addSticky, stickyOptions);

function addSticky (entries, observer) {
  entries.forEach(entry => {
    entry.target.classList.toggle('active', entry.isIntersecting);
  });
}

// forEach loop checking each of the sticky bars

stickyContainers.forEach(element => {
    stickyItems.observe(element);
  });

