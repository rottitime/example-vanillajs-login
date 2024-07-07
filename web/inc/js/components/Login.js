import { validateEmail } from '../utils/form.utils.js'

class Login extends HTMLFormElement {
  txtUsername
  txtPassword
  txtSubmit
  //   buttonId
  //   sectionId

  constructor() {
    super()
    // const id = crypto.randomUUID()
    // this.buttonId = `btn-${id}`
    // this.sectionId = `pnl-${id}`
  }

  connectedCallback() {
    setTimeout(() => this.setup())
  }

  /**
   * Validates the login form.
   * @returns {Object|null} - An object containing validation errors, or null if there are no errors.
   */
  validate = () => {
    const errors = {}
    if (!this.txtUsername.value) errors.txtUsername = 'Please enter your email address'
    if (!this.txtPassword.value) errors.txtPassword = 'Please enter your password'
    return Object.entries(errors).length ? errors : null
  }

  resetErrors = () => {
    const errorSummary = this.querySelector('.error-summary')
    errorSummary.innerHTML = ''
    errorSummary.classList.add('hidden')

    this.querySelectorAll('.error-message').forEach((el) => el.remove())
  }

  displayErrors = (errors) => {
    const errorSummary = this.querySelector('.error-summary')
    errorSummary.innerHTML =
      '<h2 class="error-summary-title">There is a problem</h2><ul></ul>'
    const errorList = errorSummary.querySelector('ul')

    Object.entries(errors).forEach(([field, message]) => {
      const listItem = document.createElement('li')
      listItem.innerText = message
      errorList.appendChild(listItem)

      //field ui error
      this[field].classList.add('error')
      this[field].insertAdjacentHTML(
        'afterend',
        `<p class="error-message">${message}</p>`
      )
    })

    errorSummary.classList.remove('hidden')
    this.querySelector('.error-summary-title').focus()
  }

  createErrorSummary() {
    const errorSummary = document.createElement('div')
    errorSummary.setAttribute('class', 'error-summary hidden')
    this.prepend(errorSummary)
  }

  setup() {
    this.noValidate = true
    this.txtUsername = this.querySelector('input[name=username]')
    this.txtPassword = this.querySelector('input[name=password]')
    this.txtSubmit = this.querySelector('button')

    this.createErrorSummary()

    this.addEventListener('submit', (e) => {
      e.preventDefault()

      const errors = this.validate()

      if (errors) this.displayErrors(errors)
    })
  }
}

const setupLogin = () => customElements.define('bw-login', Login, { extends: 'form' })

export default setupLogin
