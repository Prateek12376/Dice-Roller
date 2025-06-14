// dice roll program 

function rollDice(){
    const noOfDice = document.getElementById(`noOfDice`).value;
    const diceResult = document.getElementById(`diceResult`);
    const diceImages = document.getElementById(`diceImages`);
    const sum = document.getElementById(`sum`);
    const values = [];
    const images = [];
    let temp = 0;
    for(let i = 0; i<noOfDice; i++){
        const value =  Math.floor(Math.random()*6) +1 ;
        values.push(value);
        temp= temp + value;
        images.push(`<img src="${value}.png" alt="Dice ${value}"> `)
    }
    sum.textContent = `Total sum : ${temp}`;
    diceResult.textContent = `Dice : ${values.join(`, `)}`;
    diceImages.innerHTML = images.join(` `);

}