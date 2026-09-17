export function showAmbitions() {
  document.querySelector('#ambitions').classList.add('is-clicked')
  document.querySelector('#work').classList.remove('is-clicked')
  document.querySelector('#hobbies').classList.remove('is-clicked')
  document.querySelector('.ambitions').classList.add('is-clicked')
  document.querySelector('.work').classList.remove('is-clicked')
  document.querySelector('.hobbies').classList.remove('is-clicked')
}

export function showWork() {
  document.querySelector('#ambitions').classList.remove('is-clicked')
  document.querySelector('#work').classList.add('is-clicked')
  document.querySelector('#hobbies').classList.remove('is-clicked')
  document.querySelector('.ambitions').classList.remove('is-clicked')
  document.querySelector('.work').classList.add('is-clicked')
  document.querySelector('.hobbies').classList.remove('is-clicked')
}

export function showHobbies() {
  document.querySelector('#ambitions').classList.remove('is-clicked')
  document.querySelector('#work').classList.remove('is-clicked')
  document.querySelector('#hobbies').classList.add('is-clicked')
  document.querySelector('.ambitions').classList.remove('is-clicked')
  document.querySelector('.work').classList.remove('is-clicked')
  document.querySelector('.hobbies').classList.add('is-clicked')
}