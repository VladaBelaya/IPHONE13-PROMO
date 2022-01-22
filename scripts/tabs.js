const tabsFunc = () => {
    const tabsBtn = document.querySelectorAll('.card-detail__change')
    const cardTitle = document.querySelector('.card-details__title')
    const cardPrice = document.querySelector('.card-details__price')
    const cardImage = document.querySelector('.card__image_item')
    const title = document.querySelector('title')
    const tabsOptions = [{
            name: 'Graphite',
            memory: 128,
            price: 80000,
            image: 'img/iPhone-graphite.webp'
        },
        {
            name: 'Silver',
            memory: 256,
            price: 90000,
            image: 'img/iPhone-silver.webp'
        },
        {
            name: 'Sierra Blue',
            memory: 512,
            price: 100000,
            image: 'img/iPhone-sierra_blue.webp'
        }
    ]

    const changeActiveTabs = (indexClickedTab) => {
        tabsBtn.forEach((btn, idx) => {
            btn.classList.remove('active')
            if (idx === indexClickedTab) {
                btn.classList.add('active')
            }
        })

        changeContent(indexClickedTab)

    }

    const changeContent = (idx) => {
        title.textContent = `IPhone ${tabsOptions[idx].name}`
        cardTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[idx].memory}GB ${tabsOptions[idx].name}`
        cardPrice.textContent = `${tabsOptions[idx].price}₽`
        cardImage.setAttribute('src', tabsOptions[idx].image)
    }

    tabsBtn.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            changeActiveTabs(idx)
        })
    })

    changeContent(0)
}

tabsFunc()