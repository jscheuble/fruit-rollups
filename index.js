let image = document.querySelector('img');

const animate = () => {
    gsap.to(image, {
        duration: 3,
        rotate: 360,
        scale: 35,
    })
}

image.addEventListener('click', () => {
    animate();
})

