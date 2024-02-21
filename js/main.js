const overlay = document.getElementsByClassName('m-evomodal')[0]
const toggleButtons = [...document.getElementsByClassName('toggle-button')]

const toggleButtonHandler = () => {
  const overlayIsVisible = overlay.getAttribute('aria-expanded') === 'true';
  overlay.setAttribute('aria-expanded', overlayIsVisible ? 'false' : 'true')
}

toggleButtons.map((item, index) => {
  item.addEventListener('click', toggleButtonHandler)
})
