let dadoUser;
const betBtn = document.getElementById('bet')
const playBtn = document.getElementById('play')
const message = document.getElementById('messageBox')
document.getElementById('play').classList.add('d-none')

betBtn.addEventListener('click', function(){
    dadoUser = Math.floor(Math.random() * 6) + 1
    message.innerHTML = '<p>Il tuo numero della fortuna è ' + dadoUser + '</p>'
    document.getElementById('bet').classList.add('d-none')
    document.getElementById('play').classList.remove('d-none')
})

playBtn.addEventListener('click', function(){
    const dadoBanco = Math.floor(Math.random() * 6) + 1
    message.classList.add('d-none')
    
    if (dadoBanco > dadoUser){
        message.innerHTML = '<p class="text-danger"> Che disdetta! Il banco ha ' + dadoBanco + ' ma il tuo numero è ' + dadoUser + '</p>'
        message.classList.remove('d-none')
        playBtn.classList.add('d-none')
    }else if (dadoUser > dadoBanco) {
        message.innerHTML = '<p class="text-success">Accidenti hai vinto, il tuo numero è ' + dadoUser + ' mentre quello del banco è ' + dadoBanco + '</p>'
        message.classList.remove('d-none')
        playBtn.classList.add('d-none')
    }else {
        message.innerHTML = '<p>Che sfortuna.. ' + dadoUser + ' è uguale al numero del banco che è ' + dadoBanco + ' PAREGGIO! </p>'
        message.classList.remove('d-none')
        playBtn.classList.add('d-none')
    }
})