(() => {
  const operations = {
    "+": (a, b) => Number(a) + Number(b),
    "-": (a, b) => Number(a) - Number(b),
    "*": (a, b) => Number(a) * Number(b),
    "/": (a, b) => Number(a) / Number(b),
  }

  const operationElement = document.getElementById('operation')
  const number1Element = document.getElementById('number1')
  const number2Element = document.getElementById('number2')

  operationElement.setAttribute('list', JSON.stringify([
    { value: '+', label: 'Adição', selected: true },
    { value: '-', label: 'Subtração' },
    { value: '*', label: 'Multiplicação' },
    { value: '/', label: 'Divisão' },
  ]))

  document.getElementById('button').addEventListener('click', () => {
    const operation = operationElement.getAttribute('value') || "+"
    const number1 = number1Element.getAttribute('value')
    const number2 = number2Element.getAttribute('value')
    document.getElementById('result').innerHTML = `${number1} ${operation} ${number2} = ${operations[operation](number1, number2)}`
  })
})()