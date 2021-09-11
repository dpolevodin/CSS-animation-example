const animationClass = {
    changeClass: (animationType) => {
        const squares = document.querySelectorAll('.square__item')
        for (item of squares) {
            item.classList.add(`square__item-animation-${animationType.toLowerCase()}`)
        }
        setTimeout(() => {
            for (item of squares) {
                item.classList.remove(`square__item-animation-${animationType.toLowerCase()}`)
            }
        }, 5000);
    }
}