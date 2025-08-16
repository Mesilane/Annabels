gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
if (typeof smoother !== 'undefined') {
    smoother.scrollTo(0, false);
} else {
    window.scrollTo(0, 0);
}
});

let smoother = ScrollSmoother.create({
    content: '.smooth-content',
    wrapper: ".smooth-wrapper",
    smooth: 5,
    effects: true,
});

let b1_img = gsap.to(".b1 img", {
    y: () => -(document.querySelector('.b1 img').offsetHeight - window.innerHeight),
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".b1",
        start: "top top",
        end: "bottom center",
        scrub: true,
        invalidateOnRefresh: true
    }
})

window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});

ScrollTrigger.create({
    trigger: ".t .big_wrap",
    start: "top bottom",
    end: "+=220px bottom",
    onEnter: () => {
        for (const i of document.querySelectorAll('.t .appear')){
            i.classList.remove('toggled')
        }
    },
    onEnterBack: () => {
        for (const i of document.querySelectorAll('.t .appear')){
            i.classList.add('toggled')
        }
    }
})

ScrollTrigger.create({
    trigger: ".t .big_wrap",
    start: "+=170px bottom",
    end: "+=100px",
    onEnter: () => {
        document.querySelector('.t .big_wrap').style.transform = 'translateY(200px)'
        for (const i of document.querySelectorAll(".t .wrap_low")){
            i.style.transform = 'translateY(-200px)'
        }
    },
    onEnterBack: () => {
        document.querySelector('.t .big_wrap').style.removeProperty('transform')
        for (const i of document.querySelectorAll(".t .wrap_low")){
            i.style.removeProperty("transform")
        }
    }
})


const t_log = gsap.to('.t .log_wrapper', {
    y: () => 350,
    ease: 'power1.out',
    scrollTrigger: {
        trigger: ".t",
        start: "+=250px bottom",
        end: () => `+=${window.innerHeight + 30}`,
        scrub: true,
        invalidateOnRefresh: true,
    }
})


ScrollTrigger.create({
    trigger: ".b_2",
    start: `top +=153px`,
    end: () => `${document.querySelector('.content').offsetHeight + document.querySelector('.b_2-wrapper').offsetHeight + 400}px`,
    pin: ".t .log_inner",
    pinType: "transform",
    pinSpacing: false,
    invalidateOnRefresh: true,
})

ScrollTrigger.create({
    trigger: ".b_2",
    start: () => `top +=${123 * window.innerHeight / 703}px`,
    end: () => `+=${document.querySelector('.content').offsetHeight + document.querySelector('.b_2-wrapper').offsetHeight}px +=${window.innerHeight - (window.innerHeight - document.querySelector('.b_2-wrapper').offsetHeight) / 2}`,
    pin: ".b_2-wrapper",
    invalidateOnRefresh: true,
    pinType: "transform",
    onUpdate: (self) => {
        gsap.set('.c_box', {
            y: () => -self.progress * (self.end - self.start)
        })
    }
})


gsap.to('.c_box .img', {
    height: () => document.querySelector('.b_2-wrapper').offsetHeight,
    width: () => 0.6 * window.innerWidth,
    scrollTrigger: {
        trigger: '.content',
        start: () => `+=${document.querySelector('.b_2 .content').offsetHeight - (window.innerHeight - document.querySelector('.b_2-wrapper').offsetHeight) / 2} bottom`,
        end: () => `+=${document.querySelector('.b_2 .content').offsetHeight - (window.innerHeight - document.querySelector('.b_2-wrapper').offsetHeight) / 2} top`,
        scrub: true,
        ease: "power1.out",
        invalidateOnRefresh: true,
    }
})

gsap.to('.t .log_inner2', {
    y: -30,
    scrollTrigger: {
        trigger: '.b_3',
        start: () => `top +=${90 * 703 / window.innerHeight}px`,
        end: '+=30px',
        scrub: true,
        ease: "power1.out",
        invalidateOnRefresh: true
    }
})

ScrollTrigger.create({
    trigger: '.b_3 .big_wrap',
    start: () => `top +=${90 * 703 / window.innerHeight + 30}px`,
    end: '+=2000px',
    pin: '.b_3 .log_wrapper',
    pinSpacing: false,
    invalidateOnRefresh: true
})

ScrollTrigger.create({
    trigger: ".b_3 .img",
    start: "top bottom",
    markers: true,
    end: () => `+=160px +=${window.innerHeight - 100 * window.innerHeight / 703}px`,
    onEnter: () => {
        for (const i of document.querySelectorAll('.b_3 .appear')){
            i.classList.remove('toggled')
        }
        document.querySelector('.bottom .par').style.removeProperty('transform')
    },
    onEnterBack: () => {
        for (const i of document.querySelectorAll('.b_3 .appear')){
            i.classList.add('toggled')
        }
        document.querySelector('.botoom .par').style.transform = 'translateY(100px)'
    }
})

ScrollTrigger.create({
    trigger: ".b_3 .img",
    start: () => `+=160px +=${window.innerHeight - 130 * window.innerHeight / 703}px`,
    end: "+=100px",
    onEnter: () => {
        document.querySelector('.t .big_wrap').style.transform = 'translateY(200px)'
        for (const i of document.querySelectorAll(".b_3 .wrap_low")){
            i.style.transform = 'translateY(-200px)'
        }
    },
    onEnterBack: () => {
        document.querySelector('.t .big_wrap').style.removeProperty('transform')
        for (const i of document.querySelectorAll(".b_3 .wrap_low")){
            i.style.removeProperty("transform")
        }
    }
})