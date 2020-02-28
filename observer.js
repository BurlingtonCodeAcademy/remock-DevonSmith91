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