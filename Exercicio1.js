let btn = document.getElementById("escada")
let rsp = document.getElementById("resposta")
let str = ''
let steps = document.getElementById("stps")
function escadas() {
    steps.innerHTML = ""
    let n = document.getElementById("qtdSteps").value
        for (let row = 0; row< n; row++) {
        let degrau = ''
        for ( let col = 0; col < n - row - 1; col++){
            degrau += '&nbsp&nbsp'
        }
        for (let str = 0; str < row + 1; str++ ){
            degrau += '*'
        }    
    let div = document.createElement("div")
    div.innerHTML = degrau
    steps.appendChild(div)    
    console.log(degrau)
    } 
}



const numbers = /([0-9])/
const uperCaseLetters = /([A-Z])/
const lowCaseLetters = /([a-z])/
const specialCharacters = /([!,@,#,$,%,^,&,*,(,),-,+])/ 

let pass =  document.getElementById("password")
let spanPass = document.getElementById("span-password")

pass.addEventListener("keyup", () => {
    if(pass.value.length < 6){
        spanPass.setAttribute("style","display:block")
        spanPass.innerHTML="Mínimo de Caracteres 6"
       
    } else {
        if(pass.value.match(numbers) && 
        pass.value.match(uperCaseLetters) &&
        pass.value.match(lowCaseLetters) && 
        pass.value.match(specialCharacters)
        ){
        spanPass.innerHTML = 'Senha forte!'
        
        } else { 
        spanPass.innerHTML="Precisa conter um numero , uma letra minúscula, uma letra maiúscula , e um caractere especial"
        } 
    }
})
