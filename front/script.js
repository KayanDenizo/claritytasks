const form = document.querySelector("#form-cadastro")
let inputEmail = document.querySelector("#email");
let inputNome = document.querySelector("#name");
let inputSenha = document.querySelector("#password");
let btnCadastro = document.querySelector("#btn-cadastrar")

// FORMULARIO CADASTRO
form.addEventListener('submit', (e) => {
    e.preventDefault() //previnir que recarregue a pagina
    
    const usuario = {
        nome: inputNome.value,
        email: inputEmail.value,
        senha: inputSenha.value
    }
    
    localStorage.setItem('usuario', JSON.stringify(usuario))
    
    form.reset()
    window.location.href = 'signin.html'
})

// FORMULARIO LOGIN
const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'))

