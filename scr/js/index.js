let botaoEnviar = document.getElementsByClassName('send')[0]
let dadosForm = document.querySelectorAll('.input')
let requiredInput = document.querySelectorAll('.required-input')

botaoEnviar.addEventListener('click', verificacao)

 function verificacao(){
    dadosForm.forEach(function(input,i){

        if(input.value){
            input.style.border = '2px solid #00C22B'
            requiredInput[i].style.display = 'none'
            event.preventDefault()

        }else{
            input.style.border = '2px solid #F52E2E'
            requiredInput[i].style.display = 'block'
        }
    }
    )
}
