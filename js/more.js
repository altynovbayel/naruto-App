const $identification = JSON.parse(localStorage.getItem('more'))
const $arrow = document.querySelector('.arrow')
const $body = document.querySelector('.body')

window.addEventListener('load', () => {
  if (localStorage.getItem('auth') === 'false') {
    window.open('./authoriz.html', '_self')
  }
})

window.addEventListener('load', () => {
  if (!localStorage.getItem('backColor') && !localStorage.getItem('backImage')) {
    localStorage.setItem('backColor', 'null')
    localStorage.setItem('backImage', 'null')
  } else {
    const backColor = localStorage.getItem('backColor')
    const backImg = localStorage.getItem('backImage')
    if(backColor == 'null'){
      $body.setAttribute('style', `background-image: url(${backImg})`)
    }else{
      $body.setAttribute('style', `background-color: ${backColor}`)
    }
  }
})

document.querySelector('.row').innerHTML = $identification.map(({
  image,
  name,
  power,
  level,
  clan,
  village,
  elements
}) => {
  document.querySelector('.titleDoc').innerHTML = name
  document.querySelector('.title').innerHTML = name
  return `
    <div class="col-12 col-sm-12 col-md-12 col-xl-12">
      <div class="card-image">
        <img class="w-100" src=${image} style="height:400px; object-fit:cover;">
      </div>
      <div class="card-body bg-dark text-light ">
        <h3 class="d-flex justify-content-between w-50" style="margin:0 auto;"> <span>Power:</span> <span>${power}</span></h3>
        <h3 class="d-flex justify-content-between w-50" style="margin:0 auto;"> <span>Level:</span> <span>${level}</span></h3>
        <h3 class="d-flex justify-content-between w-50" style="margin:0 auto;"> <span>Clan:</span> <span>${clan}</span></h3>
        <h3 class="d-flex justify-content-between w-50" style="margin:0 auto;"> <span>village:</span> <span>${village}</span></h3>
        <h3 class="d-flex justify-content-between w-50" style="margin:0 auto;"> <span>Elements:</span> <span>${elements}</span></h3>
      </div>
    </div>
  `
})

$arrow.addEventListener('click', () => {
  window.open('./index.html', '_self')
})