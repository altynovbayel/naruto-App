const $name = document.querySelector('.name')
const $power = document.querySelector('.power')
const $level = document.querySelector('.level')
const $clan = document.querySelector('.clan')
const $village = document.querySelector('.village')
const $btn = document.querySelector('.btn')
const $elem = document.querySelector('.elements')
const $img = document.querySelector('.img')
const $body = document.querySelector('.body')
const $arrow = document.querySelector('.arrow')


window.addEventListener('load', () => {
  if (!localStorage.getItem('backColor') || !localStorage.getItem('backImage')) {
    localStorage.setItem('backColor', 'null')
    localStorage.setItem('backImage', 'null')
  } else {
    const backColor = localStorage.getItem('backColor')
    const backImg = localStorage.getItem('backImage')
    if (backColor === 'null') {
      $body.setAttribute('style', `background-image: url(${backImg})`)
    } else {
      $body.setAttribute('style', `background-color: ${backColor}`)
    }

  }
})

window.addEventListener('load', () => {
  if (localStorage.getItem('auth') === 'false') {
    window.open('./authoriz.html', '_self')
  }
})

$arrow.addEventListener('click', () => {
  window.open('./index.html', '_self')
})

$btn.addEventListener('click', e => {
  e.preventDefault()
  const newPers = {
    name: $name.value,
    power: $power.value,
    village: $village.value,
    level: $level.value,
    clan: $clan.value,
    elements: $elem.value,
    image: $img.value
  }
  const ninjas = JSON.parse(localStorage.getItem('ninjas'))
  ninjas.push(newPers)
  localStorage.setItem('ninjas', JSON.stringify(ninjas))

  window.open('./index.html', '_self')
})

