const links = document.querySelectorAll('.header-menu__item a')
const details = document.querySelector('.card-details__link-characteristics')
const arrayWithLinks = [...links, details]

seamless.polyfill()

arrayWithLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault()

        const id = link.getAttribute('href').substring(1)
        const section = document.getElementById(id)
        if (section) {
            seamless.elementScrollIntoView(section, {
                behavior: 'smooth',
                block: 'start'
            })
        } else {
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: "smooth",
                block: "start",
            })
        }
    })
})
