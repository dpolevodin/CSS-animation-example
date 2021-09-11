const animationClass = {
    changeClass: (animationType) => {
        const squares = document.querySelectorAll('.square__item')
        const buttons = document.querySelectorAll('.console__buttons')
        for (item of squares) {
            item.classList.add(`square__item-animation-${animationType.toLowerCase()}`)
        }
        for (item of buttons) {
            item.setAttribute('disabled', 'disabled')
        }
        setTimeout(() => {
            for (item of squares) {
                item.classList.remove(`square__item-animation-${animationType.toLowerCase()}`)
            }
            for (item of buttons) {
                item.removeAttribute('disabled')
            }
        }, 5000);
    }
}