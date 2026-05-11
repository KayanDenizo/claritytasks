const form = document.querySelector("#form-login");
let inputEmail = document.querySelector("#email");
let inputNome = document.querySelector("#name");
let inputSenha = document.querySelector("#password");
let btnLogin = document.querySelector("#btn-login")


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'))
    
    if (!usuarioSalvo) {
        alert('Nenhum usuario cadastrado')
    }

    if (inputEmail.value === usuarioSalvo.email && inputSenha.value === usuarioSalvo.senha) {
        alert('Login realizado com sucesso')

        window.location.href = 'homepage.html'
    } else {
        alert('Email ou senha incorretos')
    }

    if (inputEmail.value === '' || inputEmail.value === '' || inputSenha === '') {
        alert('Preencha todos os campos')
        return
    }

window.location.href = '/front/src/homepage.html'


});