const imgs = document.querySelectorAll("img");
const jogo = document.getElementById("jogo");
const resultado = document.querySelector("#resultado");
//this function = this da function referencia quem chmar ela
//this arrow function = this da arrow function referencia quem definiu ela


function Jogar(){
    jogo.innerHTML = "";
    let id = this.id;
    jogo.appendChild(this.cloneNode());
    let sorteio = Math.ceil(Math.random()*3);
    let jogadapc;
    if(sorteio == 1){
        jogo.appendChild(imgs[0].cloneNode());
        jogadapc = "pedra";
    }
    else if(sorteio == 2){
        jogo.appendChild(imgs[1].cloneNode());
        jogadapc = "papel";
    }
    else{
        jogo.appendChild(imgs[2].cloneNode());
        jogadapc = "tesoura";
    }

    if(jogadapc == "pedra" && id == "papel"){
        resultado.innerHTML = "Você ganhou!";
    }
    else if(jogadapc == "papel" && id == "tesoura"){
        resultado.innerHTML = "Você ganhou!";
    }
    else if(jogadapc == "tesoura" && id == "pedra"){
        resultado.innerHTML = "Você ganhou!";
    }
    else if(jogadapc == id){
        resultado.innerHTML = "Empatou!";
    }
    else{
        resultado.innerHTML = "Você Perdeu :(";
    }
}


for(let i=0;  i < imgs.length; i++){
    imgs[i].addEventListener("click", Jogar);
}



