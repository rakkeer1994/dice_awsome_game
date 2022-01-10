






let dice1 = document.querySelector("#image1");
let dice2 = document.querySelector("#image2");
let gameStatus = document.querySelector("h2");


function ludogame(){
    let diceNo1 = Math.floor(Math.random()*6)+1;
    let diceNo2 = Math.floor(Math.random()*6)+1;
    let diceChange1 = `./dice/dice${diceNo1}.jpg`;
    dice1.setAttribute("src",diceChange1);

    let diceChange2 = `./dice/dice${diceNo2}.jpg`;
    dice2.setAttribute("src",diceChange2);

    if(diceNo1>diceNo2){
        gameStatus.innerHTML="Player1 Win";
    }

    else if(diceNo1 == diceNo2){
        gameStatus.innerHTML="Draw Match";
    }
    else{
        gameStatus.innerHTML="Player2 Win";
    }
}

