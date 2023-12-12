let botaoEnviar = document.getElementsByClassName('send')[0]
let dadosForm = document.querySelectorAll('input')
let requiredInput = document.querySelectorAll('.required-input')

botaoEnviar.addEventListener('click', verificacao)

function verificacao(){
    for(let i=0; i<=3;i++){
        if(dadosForm[i].value){
            dadosForm[i].style.border = '2px solid #00C22B'
            requiredInput[i].style.display = 'none'
            event.preventDefault()
        }else{
            dadosForm[i].style.border = '2px solid #F52E2E'
            requiredInput[i].style.display = 'block'
        }
    }
}