class MyInput extends HTMLElement {
  constructor() {
    super()

    this.render()


    this.handleChange()
  }

  handleChange() {
    this.oninput = event => this.setAttribute('value', event.target.value)
  }

  render() {
    const label = this.getAttribute('label') || ''
    const placeholder = this.getAttribute('placeholder') || 'Digite algo...'
    const className = this.getAttribute('class') || ''
    const value = this.getAttribute('value') || ''
    const id = this.getAttribute('id') || ''
    const type = this.getAttribute('type')

    this.innerHTML =
      `<label id="${id}" class="my-input ${className}">
        ${label}
        <input placeholder="${placeholder}" value="${value}" type="${type}" />
      </label>`
  }
}

customElements.define('my-input', MyInput)
