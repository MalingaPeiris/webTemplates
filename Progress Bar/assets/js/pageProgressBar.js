const progressBar=document.querySelector('#pageProgressBar');
const section = document.querySelector('section');

const animateProgerssBar = () => {
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";

}

window.addEventListener('scroll',animateProgerssBar);
