const buttons = document.querySelectorAll(".caracter")

buttons.forEach(button => {
    button.addEventListener('click', (valor) => {
        const elemento = valor.target.textContent
        document.querySelector(".display").value += elemento
    })
});


const apagar = document.querySelector('.gray.apagar').addEventListener('click', () => {
    document.querySelector('.display').value = '';
})
const resultado = document.querySelector('.igual').addEventListener('click', () => {
    const mostrarValor = document.querySelector(".display").value
    document.querySelector('.display').value = eval(mostrarValor)
})

const inverte = document.querySelector('.inverte').addEventListener('click', () => {
    const mostrarValor = document.querySelector(".display").value
    document.querySelector('.display').value = mostrarValor * -1
})