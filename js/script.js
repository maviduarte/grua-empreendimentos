const flatImg = document.getElementById('flat'); // seleciona o elemento id
const backImg = document.getElementById('back');
let timer; // guarda o tempo

flatImg.addEventListener('mouseenter', () => {
    clearTimeout(timer); // cancela / apaga o cronômetro anterior (para não dar bug caso passar o mouse novamente)

    flatImg.classList.add('fixed'); // adiciona / chama a classe e faz o que tá configurado nela (move a imagem)
    backImg.classList.remove('show-ou');
    backImg.classList.add('show-in');
    
    // inicia um novo cronômetro de 3s (fixa a imagem durante esse tempo)
    timer = setTimeout(() => {
        flatImg.classList.remove('fixed'); //cancela / remove a classe após esse tempo (movendo a imagem para posição original)
        backImg.classList.remove('show-in');
        backImg.classList.add('show-ou');
    }, 3000);
});