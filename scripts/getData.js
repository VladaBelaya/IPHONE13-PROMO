const getData = () => {
    const csList = document.querySelector('.cross-sell__list')
    const csBtn = document.querySelector('.cross-sell__add')
    let stack = 4
    let count = 1

    const render = (data) => {
        csList.textContent = ''
        data.forEach(el => {
            csList.insertAdjacentHTML('beforeend', `
                <li>
                    <article class="cross-sell__item">
                        <img class="cross-sell__image" src="${el.photo}" alt="${el.id}">
                        <h3 class="cross-sell__title">${el.name}</h3>
                        <p class="cross-sell__price">${el.price}₽</p>
                        <button type="button" class="button button_buy cross-sell__button">Купить</button>
                    </article>
                </li>
            `)
        });
    }

    const sliceArray = (data, index) => {
        return data.slice(0, index)
    }

    const changeData = (data) => {
        const newStack = stack * count
        render(sliceArray(data, newStack))
        if (data.length > newStack) {
            count++
        } else {
            csBtn.style.display = 'none'
        }
    }

    const getGoods = () => {
        fetch('cross-sell-dbase/dbase.json')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Данные были получены с ошибкой')
                }
            })
            .then(data => {
                changeData(data)
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    csBtn.addEventListener('click', getGoods)

    getGoods()
}

getData()