let catalogo = document.querySelector("#catalogo")


catalogo.addEventListener('click', (e)=>{
    e.preventDefault()
    alert('Calma, ainda estamos em desenvolvimento, mas peça pelo nosso WhatsApp 😁')
})



let trilho = document.querySelector('.trilho')
let body = document.querySelector('body')
let menu = document.querySelector('.menu')


document.addEventListener('DOMContentLoaded', ()=> {
    // Verifica se a preferência do usuário está armazenada no localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Atualiza o estado da página conforme a preferência do usuário
    if (isDarkMode) {
        document.body.classList.add('dark');
        trilho.classList.add('dark');
    }

    trilho.addEventListener('click', () => {
        // Alterna a classe 'dark' nos elementos relevantes
        trilho.classList.toggle('dark');
        body.classList.toggle('dark');

        // Atualiza a preferência do usuário no localStorage
        localStorage.setItem('darkMode', body.classList.contains('dark'));
    });
});