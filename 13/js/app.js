console.log('hello world')

function openMenu() {
  let element = document.getElementById("header-nav")
  element.classList.add('active')
}

function closeMenu() {
  let element = document.getElementById("header-nav")
  element.classList.remove('active')
}