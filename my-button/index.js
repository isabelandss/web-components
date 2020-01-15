class MyButton extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    const children = this.innerHTML
    const id = this.getAttribute('id') || ''

    this.innerHTML =
      `<button class="my-button" id="${id}">${children}</button`
  }
}

customElements.define('my-button', MyButton)
