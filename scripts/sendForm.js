const sendForm = () => {
    const btnDlvry = document.querySelector('.card-details__button_delivery')
    const cardDetailsTitle = document.querySelector('.card-details__title')
    const modal = document.querySelector('.modal')
    const modalTitle = document.querySelector('.modal__title')
    const modalForm = document.querySelector('form')
    const closeBtn = document.querySelector('.modal__close')

    btnDlvry.addEventListener('click', () => {
        modal.style.display = 'flex'
        modalTitle.textContent = cardDetailsTitle.textContent
    })
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const labels = modal.querySelectorAll('.modal__label')
        const sendMessage = {}

        labels.forEach(label => {
            const span = label.querySelector('span')
            const input = label.querySelector('input')
            sendMessage[span.textContent] = input.value
        })

        function clearInput() {
            labels.forEach(label => {
                const input = label.querySelector('input')
                input.value = ''
            })
        }
        console.log(sendMessage)
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(sendMessage),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(() => {
                clearInput()
                modal.style.display = 'none'
            })
    })

}

sendForm()