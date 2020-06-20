let x = document.querySelector(".xp");
let o = document.querySelector(".op");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayaer;

//Contador de jogadas
let player1 = 0;
let player2 = 0;

//Adicionando o evento click nos boxes
for (let i = 0; i < boxes.length; i++) {
    //Quando clica na caixa
    boxes[i].addEventListener("click", function () {
        let el = checkEl(player1, player2);

        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            //Computar jogada
            if (player1 == player2) {
                player1++
            } else {
                player2++
            }
        }
    });
}

function checkEl(player1, player2){
    if (player1 == player2) {
        //x
        el = x;
    } else {
        //o
        el = o;
    }

    return el;
}