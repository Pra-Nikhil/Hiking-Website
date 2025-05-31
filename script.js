const headText = document.querySelector('.head-text')
const home = document.querySelector('#home')
const first = document.querySelector('#first')
const secound = document.querySelector('#secound')
const third = document.querySelector('#third')
const heading = document.querySelector('.heading')
const mainContainer = document.querySelector('.main-container')
const homePageContant = document.querySelector('.home-page-contant')
const body = document.querySelector('body')
const leftSideNav = document.querySelector('.left-side-nav')
const closeIcon = document.querySelector('.close-icon')
const menuIcon = document.querySelector('.menu-icon')
const scroll = document.querySelector('.scroll')
const navBarRes = document.querySelector('.nav-icons-responsive')


gsap.from('.scroll img', {
    y: '20px',
    ease: "expoScale(0.5,7,none)",
    yoyo: true,
    repeat: -1,
    scale: 1
})

const tl2 = gsap.timeline()
tl2.to('.nav-icons-responsive', {
    x: '0%',
    duration: 0.4
})
tl2.from('.nav-icons-responsive a', {
    x: '200%',
    duration: 0.4,
    stagger: 0.2,
    opacity: 0
})

tl2.pause()

menuIcon.addEventListener('click', (e) => {
    console.log('menu')
    e.stopPropagation()
    tl2.play()
})
closeIcon.addEventListener('click', (e) => {
    console.log('close')
    e.stopPropagation()
    tl2.reverse()
})
navBarRes.addEventListener('click', (e) => {
    e.stopPropagation()
})
body.addEventListener('click', (e) => {
    console.log('go')
    e.stopPropagation()
    tl2.reverse()
})


gsap.from('.head-text', {
    x: '600px',
    duration: 1,
    opacity: 0,
})

gsap.from('.guide', {
    y: '40px',
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.4
})
gsap.from('.scroll', {
    y: '40px',
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.4
})

gsap.from('.left-side-nav a', {
    x: '60px',
    duration: 1,
    delay: 1.4,
    opacity: 0,
    stagger: 0.4
})

gsap.from('.social-icon a', {
    y: '40px',
    duration: 1,
    delay: 1.4,
    opacity: 0,
    stagger: 0.4
})

const tl = gsap.timeline();

tl.from('.nav-icons a', {
    y: '-40px',
    opacity: 0,
    stagger: 0.4
})

tl.from('#pra1 h1', {
    x: '200px',
    duration: 1.2,
    delay: 0.2,
    ease: "sine.out",
    opacity: 0,
    scale: 1,
    scrollTrigger: {
        trigger: '#pra1 h1',
        // scroller: 'body',
        start: 'top 100%',
        end: 'bottom 48%',
        scrub: 1,
    }
})
tl.from('#pra2 h1', {
    x: '200px',
    duration: 1.2,
    delay: 0.2,
    ease: "sine.out",
    opacity: 0,
    scale: 1,
    scrollTrigger: {
        trigger: '#pra2 h1',
        // scroller: 'body',
        start: 'top 100%',
        end: 'bottom 48%',
        scrub: 1,
    }
})
tl.from('#pra3 h1', {
    x: '200px',
    duration: 1.2,
    delay: 0.2,
    ease: "sine.out",
    opacity: 0,
    scale: 1,
    scrollTrigger: {
        trigger: '#pra3 h1',
        // scroller: 'body',
        start: 'top 100%',
        end: 'bottom 48%',
        scrub: 1,
    }
})
tl.from('#img1', {
    x: '200px',
    delay: 0,
    opacity: 0,
    // scale: 0.8,
    scrollTrigger: {
        trigger: '#img1',
        scroller: 'body',
        start: 'top 100%',
        end: 'bottom 60%',
        scrub: 1,
    }
})
tl.from('#img2', {
    x: '-200px',
    delay: 0,
    opacity: 0,
    // scale: 0.8,
    scrollTrigger: {
        trigger: '#img2',
        scroller: 'body',
        start: 'top 100%',
        end: 'bottom 60%',
        scrub: 1,
    }
})
tl.from('#img3', {
    x: '200px',
    delay: 0,
    opacity: 0,
    // scale: 0.8,
    scrollTrigger: {
        trigger: '#img3',
        scroller: 'body',
        start: 'top 100%',
        end: 'bottom 60%',
        scrub: 1,
    }
})
tl.from('#pra1 p', {
    x: '-200px',
    duration: 1,
    delay: 0.2,
    ease: "sine.out",
    opacity: 0.4,
    scale: 0.8,
    scrollTrigger: {
        trigger: '#pra1 p',
        // scroller: 'body',
        start: 'top 100%',
        end: 'bottom 84%',
        scrub: 1,
    }
})
tl.from('#pra2 p', {
    x: '-200px',
    duration: 1,
    delay: 0.2,
    ease: "sine.out",
    opacity: 0.4,
    scale: 0.8,
    scrollTrigger: {
        trigger: '#pra2 p',
        // scroller: 'body',
        start: 'top 100%',
        end: 'bottom 84%',
        scrub: 1,
    }
})
tl.from('#pra3 p', {
    x: '-200px',
    duration: 1,
    delay: 0.2,
    ease: "sine.out",
    opacity: 0.4,
    scale: 0.8,
    scrollTrigger: {
        trigger: '#pra3 p',
        // scroller: 'body',
        start: 'top 100%',
        end: 'bottom 84%',
        scrub: 1,
    }
})

// leftSideNav.addEventListener('mousemove', (e) => {
//     let animationMove = e.clientY - 290
//     console.log('hii')

//     gsap.to('.nav-animation', {
//         y: `${animationMove}px`,
//         duration: 0.4,
//     })
// })

// home mouse animation 


window.addEventListener('scroll', (e) => {
    e.stopPropagation()
    
    const scrollLength = window.scrollY
    if (scrollLength >= 0 && scrollLength <= 500) {
        gsap.to('.nav-animation', {
            y: `0`,
            delay: 0.8,
            ease: "sine.out",
        })
    } else if (scrollLength >= 500 && scrollLength <= 1100) {
        gsap.to('.nav-animation', {
            y: `50`,
            delay: 0.8,
            ease: "sine.out",
        })
    } else if (scrollLength > 1100 && scrollLength <= 1640) {
        gsap.to('.nav-animation', {
            y: `104`,
            delay: 0.8,
            ease: "sine.out",
        })
    } else if (scrollLength > 1640) {
        gsap.to('.nav-animation', {
            y: `158`,
            delay: 0.8,
            ease: "sine.out",
        })
    }
})

leftSideNav.addEventListener('mouseenter', (e) => {
    e.stopPropagation()
home.addEventListener('mousemove', (e) => {
    e.stopPropagation()
    let animationMove = 0
    gsap.to('.nav-animation', {
        y: `${animationMove}`,
        delay: 0.2,
        ease: "sine.out",
    })
})
first.addEventListener('mousemove', (e) => {
    e.stopPropagation()
    let animationMove = 50
    gsap.to('.nav-animation', {
        y: `${animationMove}`,
        delay: 0.2,
        ease: "sine.out",
    })
})

secound.addEventListener('mousemove', (e) => {
    e.stopPropagation()
    let animationMove = 104

    gsap.to('.nav-animation', {
        y: `${animationMove}`,
        delay: 0.2,
        ease: "sine.out",
    })
})


third.addEventListener('mousemove', (e) => {
    e.stopPropagation()
    let animationMove = 158

    gsap.to('.nav-animation', {
        y: `${animationMove}px`,
        delay: 0.2,
        ease: "sine.out",
    })
})

home.addEventListener('mouseout', (e) => {
    e.stopPropagation()
    let animationMove = 0

    gsap.to('.nav-animation', {
        y: `${animationMove}`,
        delay: 0.2
    })
})

first.addEventListener('mouseout', (e) => {
    let animationMove = 0

    gsap.to('.nav-animation', {
        y: `${animationMove}`,
        delay: 0.2
    })
})
secound.addEventListener('mouseout', (e) => {
    let animationMove = 0

    gsap.to('.nav-animation', {
        y: `${animationMove}`,
        delay: 0.2,
        ease: "sine.out",
    })
})
third.addEventListener('mouseout', (e) => {
    let animationMove = 0

    gsap.to('.nav-animation', {
        y: `${animationMove}px`,
        delay: 0.2,
        ease: "sine.out",
    })
})
})

// home mouse animation

home.addEventListener('click', (e) => {
    e.stopPropagation()

    home.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 0

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })
    first.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 50
        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2,
            ease: "sine.out",
        })
    })

    secound.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 104

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2,
            ease: "sine.out",
        })
    })


    third.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 158

        gsap.to('.nav-animation', {
            y: `${animationMove}px`,
            delay: 0.2,
            ease: "sine.out",
        })
    })

    // home mouseout

    home.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 0

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })

    first.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 0

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })
    secound.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 0

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2,
            ease: "sine.out",
        })
    })
    third.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 0

        gsap.to('.nav-animation', {
            y: `${animationMove}px`,
            delay: 0.2,
            ease: "sine.out",
        })
    })
})

// first mouse animation 

first.addEventListener('click', (e) => {
    e.stopPropagation()

    home.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 0

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
        })
    })
    first.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 50

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })

    })

    secound.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 104

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })


    third.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 158

        gsap.to('.nav-animation', {
            y: `${animationMove}px`,
            delay: 0.2
        })
    })

    // first scound

    home.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 50

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })

    first.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 50

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })
    secound.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 50

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })
    third.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 50

        gsap.to('.nav-animation', {
            y: `${animationMove}px`,
            delay: 0.2
        })
    })
})

// secound mouse click animation

secound.addEventListener('click', (e) => {

    home.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 0

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })
    first.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 50

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })

    })

    secound.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 104

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })

    third.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 158

        gsap.to('.nav-animation', {
            y: `${animationMove}px`,
            delay: 0.2
        })
    })

    //  mouseout secound

    home.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 104

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })
    first.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 104

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })
    secound.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 104

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2

        })
    })
    third.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 104

        gsap.to('.nav-animation', {
            y: `${animationMove}px`,
            delay: 0.2
        })
    })
})

// third mouse click animation

third.addEventListener('click', (e) => {

    home.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 0

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })
    first.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 50

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })

    secound.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 104

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })

    third.addEventListener('mousemove', (e) => {
        e.stopPropagation()
        let animationMove = 158

        gsap.to('.nav-animation', {
            y: `${animationMove}px`,
            delay: 0.2
        })
    })

    //  mouseout third

    home.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 158

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })
    first.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 158

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2
        })
    })
    secound.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 158

        gsap.to('.nav-animation', {
            y: `${animationMove}`,
            delay: 0.2

        })
    })
    third.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        let animationMove = 158

        gsap.to('.nav-animation', {
            y: `${animationMove}px`,
            delay: 0.2
        })
    })
})

leftSideNav.addEventListener('mouseenter', (e) => {
    e.stopPropagation()
    
    gsap.from('.border-line', {
        boxShadow: '0px 1px 12px 0px rgb(126, 126, 126)',
        yoyo: true,
        repeat: 4,
        delay: 0.4
    })
})

