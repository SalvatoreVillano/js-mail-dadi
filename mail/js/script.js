const emails = ['admin@gmail.com', 'user@gmail.com', 'mod@gmail.com'];
let cond = true;

document.getElementById('esegui').addEventListener('click', function(){

    for(let i = 0;i<emails.length; i++){
    
    const userEmail = document.getElementById('email').value
    
    if (userEmail == emails[i] || cond == true){
        document.getElementById('esegui').classList.add('d-none')
        document.getElementById('messageBox').classList.add('d-block')
        document.getElementById('messageBox').innerHTML = '<p>sei presente nella lista degli invitati<p>'
        cond = false;
    } else {
        document.getElementById('esegui').classList.add('d-none')
        document.getElementById('messageBox').classList.add('d-block')
        document.getElementById('messageBox').innerHTML = '<p>mi dispiace, non sei presente nella lista degli invitati<p>'
    }
    }
})



