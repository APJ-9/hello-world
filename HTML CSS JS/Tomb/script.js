const btn = document.getElementById('button-click')
const num1 = document.getElementById('num-1')
const num2 = document.getElementById('num-2')
const num3 = document.getElementById('num-3')
const num4 = document.getElementById('num-4')
const num5 = document.getElementById('num-5')
const a = document.getElementById('a')
const b = document.getElementById('b')
const c = document.getElementById('c')
const handleClick = () => {
    num1.remove()
    b.appendChild(num1)
}
btn.addEventListener('click', handleClick)
