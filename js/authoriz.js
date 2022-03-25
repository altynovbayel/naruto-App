const $email = document.querySelector('.email')
const $pass = document.querySelector('.pass')
const $btn = document.querySelector('.btn')
const $alert = document.querySelector('.er')
window.addEventListener('load', () => {
  if(!localStorage.getItem('auth')){
    localStorage.setItem('auth', false)
  }else{
    if(localStorage.getItem('auth') === 'true'){
      window.open('./index.html', '_self')
    }
  }
})

$btn.addEventListener('click', e => {
  e.preventDefault()

  if($email.value === 'admin' && $pass.value === 'admin'){
    $email.style.borderColor = null
    $pass.style.borderColor = null
    localStorage.setItem('auth', true)
    location.reload()
  }else{
    $email.style.borderColor = 'red'
    $pass.style.borderColor = 'red'
    $alert.innerHTML = 'неверный логин или пароль'
  }
})

