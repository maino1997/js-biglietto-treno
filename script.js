// Chiedere all'utente i km da percorrere 
// chiedere all'utente l'età
// calcolare prezzo senza sconto 
// calcolare prezzo con sconto minorenni 
// poi con sconto senior 
// rendere presentabile il prezzo 
// Iniettare in pagina il risutato 

const ticketDisplay = document.getElementById('ticketPrice');
console.log(ticketDisplay);
let finalPrice;

// Richiste all'utente 

const distance = parseInt( prompt('Quanti km vuoi percorrere?' , '50'));
const age = parseInt(prompt('Quanti anni hai?' , '30'));

// calcolare prezzo senza sconto 
const plainPrice = distance * 0.21;
console.log(`Il prezzo intero è ${plainPrice.toFixed(2)}`);



// calcoli sconti 
if (age < 18 ){
    finalPrice = plainPrice - (plainPrice / 100 * 20);
} else if(age > 65){
    finalPrice = plainPrice - (plainPrice / 100 * 40);
} else {
    finalPrice = plainPrice;
}


// rendere presentabile il prezzo 
finalPrice = finalPrice.toFixed(2);
console.log(`Il prezzo scontato è ${finalPrice}`);

// Iniettare in pagina il risultato 
ticketDisplay.innerText = `Il prezzo scontato è ${finalPrice}`;