class MySelect extends HTMLElement {
  constructor() {
    super()
    this.handleChange()
  }

  static get observedAttributes() {
    return ['list']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    name === 'list' && this.render(newValue)
  }

  handleChange () {
    this.oninput = event => this.setAttribute('value', event.target.value)
  }

  render(list = []) {
    const label = this.getAttribute('label')
    const className = this.getAttribute('class')
    const id = this.getAttribute('id')
    list = JSON.parse(list)

    this.innerHTML = 
      `<label class="my-select ${className || ''}" id="${id}">
        ${label}
        <select>
          <option>Selecione...</option>
          ${list.length
            ? list.map(item =>
              `<option ${item.selected ? 'selected' : ''} value="${item.value}">${item.label}</option>`)
            : null}
        </select>
      </label>`
  }
}

customElements.define('my-select', MySelect)

exports.mySelect = customElements.define('my-select', MySelect)


test('slider get initial value', function () {
   assert.equal(slider.value, 50);
   assert.equal(
     slider.getAttribute('value'), 50);
   assert.equal(slider.root.querySelector('.thumb').style.left, sliderWidth *
     50/100 - thumbCenterOffset + 'px');
})
