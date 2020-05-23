function modal() {
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    descriptionBtn = document.querySelectorAll('.description-btn')

  for (i = 0; i < descriptionBtn.length; i++) {
    descriptionBtn[i].addEventListener('click', () => {
      overlay.style.display = 'block'
      document.body.style.overflow = 'hidden'
    })
  }

  more.addEventListener('click', function () {
    overlay.style.display = 'block'
    this.classList.add('more-splash')
    // Отмена прокрутки страницы
    document.body.style.overflow = 'hidden'
  })

  close.addEventListener('click', () => {
    overlay.style.display = 'none'
    more.classList.remove('more-splash')
    // Возвращаем прокрутку
    document.body.style.overflow = ''
  })
}

module.exports = modal
