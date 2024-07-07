import { validateEmail } from '../utils/form.utils.js'

class Login extends HTMLFormElement {
  txtUsername
  txtPassword
  txtSubmit

  constructor() {
    super()
  }

  connectedCallback() {
    setTimeout(() => this.setup())
  }

  authenticate = async () => {
    const username = this.txtUsername.value
    const password = this.txtPassword.value
    const response = await fetch('index.php', {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })

    if (!response.ok) throw new Error('Failed to authenticate')

    return response.text()
  }

  validate = () => {
    const errors = {}

    if (!validateEmail(this.txtUsername.value)) errors.txtUsername = 'Email is invalid'
    if (!this.txtUsername.value) errors.txtUsername = 'Email is required'
    if (!this.txtPassword.value) errors.txtPassword = 'Password is required'
    return errors
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
    const entries = Object.entries(errors)

    if (!entries.length) return

    entries.forEach(([field, message]) => {
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

    this.addEventListener('submit', async (e) => {
      e.preventDefault()

      this.resetErrors()

      const errors = this.validate()
      this.displayErrors(errors)

      if (!Object.keys(errors).length && (await this.authenticate()) === 'success')
        this.submit()
    })
  }
}

const setupLogin = () => customElements.define('bw-login', Login, { extends: 'form' })

export default setupLogin
