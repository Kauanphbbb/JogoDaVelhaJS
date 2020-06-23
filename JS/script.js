let x = document.querySelector(".x");
let o = document.querySelector(".o");
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

            checkWinCondition();
        }
    });
}

function checkEl(player1, player2) {
    if (player1 == player2) {
        //x
        el = x;
    } else {
        //o
        el = o;
    }

    return el;
}

function checkWinCondition() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //Horizontal
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
            declareWinner("x");
        } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
            declareWinner("o");
        }
    }
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
            declareWinner("x");
        } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
            declareWinner("o");
        }
    }
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
            declareWinner("x");
        } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
            declareWinner("o");
        }
    }

    //Vertical
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
            declareWinner("x");
        } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
            declareWinner("o");
        }
    }
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
            declareWinner("x");
        } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
            declareWinner("o");
        }
    }
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
            declareWinner("x");
        } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
            declareWinner("o");
        }
    }

    //Diagonal 
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
            declareWinner("x");
        } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
            declareWinner("o");
        }
    }
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
            declareWinner("x");
        } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
            declareWinner("o");
        }
    }

    //Velha
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++
        }
    }

    if (counter == 9) {
        declareWinner("deu velha");
    }
}

//Limpar o jogo, atualizar placar e declarar o vencedor
function declareWinner(winner) {
    let scoreBoardX = document.querySelector("#scoreboard-1");
    let scoreBoardO = document.querySelector("#scoreboard-2");
    let msg = "";

    if (winner == "x") {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
        msg = "Jogador 1 venceu!"
    } else if (winner == "o") {
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
        msg = "Jogador 2 venceu!"
    } else {
        msg = "Deu velha!";
    }

    //exibir a mensagem
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    //esconder mensagem
    setTimeout(function () {
        messageContainer.classList.add("hide");
    }, 3000);

    //Zera as jogadas
    player1 = 0;
    player2 = 0;

    //remover os X e O
    let boxRemove = document.querySelectorAll(".box div");

    for (let i = 0; i < boxRemove.length; i++) {
        boxRemove[i].parentNode.removeChild(boxRemove[i]);
    }
}