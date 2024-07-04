let body = document.querySelector('body')

const text = document.createElement ('p')

let str = prompt ("ismingizni kiriting")

text.innerHTML = str

body.appendChild(text)

text.classList.add('matn')
body.classList.add('shadow')