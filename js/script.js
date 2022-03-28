const database = [{
    id: 1,
    name: 'Naruto Uzumaki',
    power: 'Nine tails',
    village: 'Konoha',
    level: '7th Hokage',
    clan: 'Uzumaki',
    elements: 'air',
    image: 'https://pa1.narvii.com/7422/b16cfd8029b2e6a4ec1764b3644e9396fa8d209dr1-480-270_hq.gif'
  },
  {
    id: 2,
    name: 'Sasuke Uchiha',
    power: 'Rinnegan + MS',
    village: 'Konoha',
    level: 'Shadow Hokage',
    clan: 'Uchiha',
    elements: 'lightning',
    image: 'https://i.pinimg.com/originals/71/48/c8/7148c82838437c6d8ad478848e68d482.gif '
  },
  {
    id: 3,
    name: 'Kakashi Hatake',
    power: 'Purple Chidori + MS',
    village: 'Konoha',
    level: '6th Hokage',
    clan: 'White Claw',
    elements: 'lightning',
    image: 'https://thumbs.gfycat.com/TotalOptimalAmericantoad-size_restricted.gif'
  },
  {
    id: 4,
    name: 'Minato Namikaze',
    power: 'Rasengan + Yellow flash Fuuijin',
    village: 'Konoha',
    level: '4th Hokage',
    clan: 'Namikaze',
    elements: 'yellow light',
    image: 'https://thumbs.gfycat.com/SaltyLateBasil-size_restricted.gif'
  },
  {
    id: 5,
    name: 'Itachi Uchiha',
    power: 'MS + Genjutsu',
    village: 'Konoha',
    level: 'Unlimited',
    clan: 'Akatsuki',
    elements: 'air',
    image: 'https://media0.giphy.com/media/CchzkJJ6UrQmQ/giphy.gif'
  },
  {
    id: 6,
    name: 'Madara Uchiha',
    power: 'MS + Six Path',
    village: 'Konoha',
    level: 'Destroyer',
    clan: 'Akatsuki',
    elements: 'susano',
    image: 'https://media1.tenor.com/images/fe60d20d14d53b4e0929b0a0b17c0781/tenor.gif?itemid=17049380'
  },
  {
    id: 7,
    name: 'Hashirama Senju',
    power: 'Wood Style + Regeneration',
    village: 'Konoha',
    level: 'God of War',
    clan: 'Senju',
    elements: 'tree',
    image: 'https://i.makeagif.com/media/7-28-2016/_eMaFk.gif'
  },
  {
    id: 8,
    name: 'Pain (Tendo)',
    power: 'Six path',
    village: 'Hidden Rain',
    level: 'God',
    clan: 'Akatsuki',
    elements: 'earth',
    image: 'https://thumbs.gfycat.com/JampackedExcitableHydra-size_restricted.gif'
  },
  {
    id: 9,
    name: 'Commando A',
    power: 'Light shield',
    village: 'Hidden Cloud',
    level: '4th Hokage',
    clan: 'Lighter',
    elements: 'lightning',
    image: 'https://i.pinimg.com/originals/93/85/90/938590c23c6565490f49b7f4646f7601.gif'
  },
  {
    id: 10,
    name: 'Gaara',
    power: 'Shukakus Land',
    village: 'Hidden Land',
    level: '5th Kazekage',
    clan: 'Land',
    elements: 'sand',
    image: 'https://i.gifer.com/C393.gif'
  },
  {
    id: 11,
    name: 'Kisame Hoshikage',
    power: 'White Shark + Water Style',
    village: 'Hidden Rain',
    level: 'Untail bijuu',
    clan: 'Akatsuki',
    elements: 'water',
    image: 'https://steamuserimages-a.akamaihd.net/ugc/941711796106927460/EDA08FFEF3AFDFFCD5241FD00926BCB4DAF47C09/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
  },
  {
    id: 12,
    name: 'Killer B',
    power: 'Eight Tail + Katana',
    village: 'Hidden Cloud',
    level: 'Rap God',
    clan: 'Lighter',
    elements: 'rap',
    image: 'https://qph.fs.quoracdn.net/main-qimg-8380be95c048107f587b8a5ebf70fd9f'
  },

]

const $container = document.querySelector('.row')
const $search = document.querySelector('.search')
const $select = document.querySelector('.select')
const $logout = document.querySelector('.logout')
const $sitebarBtn = document.querySelector('.sitebar_btn')
const $siteBar = document.querySelector('.sitebar')
const $backInp = document.querySelector('.setInput')
const $setBack = document.querySelector('.setback')
const $body = document.querySelector('.body')
const $addBtn = document.querySelector('.addBtn')
const $clean = document.querySelector('.cleanStorage')

window.addEventListener('load', () => {
  if (localStorage.getItem('auth') === 'false') {
    window.open('./index.html', '_self')
  }
})

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
  if (!localStorage.getItem('ninjas')) {
    localStorage.setItem('ninjas', JSON.stringify(database))
  } else {
    const ninjas = JSON.parse(localStorage.getItem('ninjas'))
    const ninjasId = ninjas.map((item, index) => {
      return {
        ...item,
        id: index
      }
    })
    localStorage.setItem('ninjas', JSON.stringify(ninjasId))
  }
})

$logout.addEventListener('click', e => {
  e.preventDefault()
  localStorage.setItem('auth', false)
  window.open('./index.html', '_self')
})

window.addEventListener('load', cardTemplate(JSON.parse(localStorage.getItem('ninjas'))))

function cardTemplate(base) {
  const card = base.map(({
    id,
    image,
    name
  }) => {
    return `
      <div class=" mb-5 col-12  col-sm-6 col-md-6 col-xl-4">
        <div class="card-header text-center text-light bg-dark">
          <h3>${name}</h3>
        </div>
        <div class="card-image">
          <img class="w-100 " src=${image} style="height:300px; object-fit:cover;">
        </div>
        <div class="card-footer bg-dark d-flex justify-content-between">
          <button class="btn btn-outline-warning w-50" onclick='more(${id})'>More</button>
          <button class="btn btn-outline-danger w-40" onclick="del(${id})">delete</button>
        </div>
      </div>
    `
  }).join('')

  $container.innerHTML = card
}

function del(idOfCard){
  const ninjas = JSON.parse(localStorage.getItem('ninjas'))
  const deleted = ninjas.filter(item => item.id !== idOfCard)
  localStorage.setItem('ninjas', JSON.stringify(deleted))
  location.reload()
}

$search.addEventListener('input', e => {
  let value = e.target.value.toUpperCase()
  let selectedVal = $select.value
  const ninjas = JSON.parse(localStorage.getItem('ninjas'))
  if (selectedVal === 'name') {
    const filtered = ninjas.filter(item => item.name.toUpperCase().includes(value))
    cardTemplate(filtered)
  } else if (selectedVal === 'clan') {
    const filtered = ninjas.filter(item => item.clan.toUpperCase().includes(value))
    cardTemplate(filtered)
  } else if (selectedVal === 'power') {
    const filtered = ninjas.filter(item => item.power.toUpperCase().includes(value))
    cardTemplate(filtered)
  } else if (selectedVal === 'level') {
    const filtered = ninjas.filter(item => item.level.toUpperCase().includes(value))
    cardTemplate(filtered)
  } else if (selectedVal === 'elements') {
    const filtered = ninjas.filter(item => item.elements.toUpperCase().includes(value))
    cardTemplate(filtered)
  } else if (selectedVal === 'village') {
    const filtered = ninjas.filter(item => item.village.toUpperCase().includes(value))
    cardTemplate(filtered)
  }
  
})

function more(idOfCard) {
  const ninjas = JSON.parse(localStorage.getItem('ninjas'))

  localStorage.setItem('more', JSON.stringify([ninjas[idOfCard]]))
  window.open('./more.html', '_self')
}

$select.addEventListener('change', e => {
  let selectedVal = e.target.value
  if (selectedVal === 'clan') {
    $search.setAttribute('placeholder', 'search by Clan')
  } else if (selectedVal === 'village') {
    $search.setAttribute('placeholder', 'search by Village')
  } else if (selectedVal === 'power') {
    $search.setAttribute('placeholder', 'search by Power')
  } else if (selectedVal === 'level') {
    $search.setAttribute('placeholder', 'search by Level')
  } else if (selectedVal === 'name') {
    $search.setAttribute('placeholder', 'search by Name')
  } else if (selectedVal === 'elements') {
    $search.setAttribute('placeholder', 'search by Elements')
  }
})

$sitebarBtn.addEventListener('click', e => {
  e.preventDefault()
  $siteBar.classList.toggle('active')
  $sitebarBtn.classList.toggle('active')
})

$setBack.addEventListener('change', e => {
  let inputVal = e.target.value
  if (inputVal === 'color') {
    $backInp.setAttribute('placeholder', 'поменять цвет бэкграунда')
  } else if (inputVal === 'img') {
    $backInp.setAttribute('placeholder', 'поменять картинку бэкграунда')
  }
})

$backInp.addEventListener('input', e => {
  let inpVal = e.target.value
  let select = $setBack.value
  if (select === 'color') {
    localStorage.setItem('backColor', inpVal)
    const backColor = localStorage.getItem('backColor')
    $body.setAttribute('style', `background-color: ${backColor}`)
  } else if (select === 'img') {
    localStorage.setItem('backImage', inpVal)
    const backImg = localStorage.getItem('backImage')
    $body.setAttribute('style', `background-image: url(${backImg})`)
  }
})

$addBtn.addEventListener('click', e => {
  e.preventDefault()
  window.open('./addCard.html', '_self')
})

$clean.addEventListener('click', () => {
  localStorage.removeItem('backColor')
  localStorage.removeItem('backImage')
  location.reload()
})  