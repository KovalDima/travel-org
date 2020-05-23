function tabs() {
  let tab = document.querySelectorAll('.info-header-tab'),
    infoHeader = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent')

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show')
      tabContent[i].classList.add('hide')
    }
  }

  hideTabContent(1)

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide')
      tabContent[b].classList.add('show')
    }
  }

  infoHeader.addEventListener('click', (e) => {
    let target = e.target
    if (target && target.classList.contains('info-header-tab')) {
      for (i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0)
          showTabContent(i)
          break
        }
      }
    }
  })
}

module.exports = tabs