let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".frontPage",
        start: "top",
        end: "100%",
        scrub: true,
        pin:true
    },
});

tl.fromTo(".frontPage",
    {clipPath: "circle(5%)"},
    { clipPath: "circle(75%)" ,duration:5}
);

tl.fromTo('.logoImage',
    { scale: 1 },
    { scale: 0 },
    { opacity: 0, duration: 1 },
    "-=3"
);

tl.fromTo('.title',
    { opacity: 0 },
    {opacity: 1,duration:1 }
);

tl.fromTo('.subTitle',
    { opacity: 0 },
    {opacity: 1 ,duration:1}
);