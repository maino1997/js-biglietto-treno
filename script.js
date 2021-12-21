// Chiedere all'utente i km da percorrere 
// chiedere all'utente l'età
// calcolare prezzo senza sconto 
// calcolare prezzo con sconto minorenni 
// poi con sconto senior 
// rendere presentabile il prezzo 
// Iniettare in pagina il risutato 


// Preparazione e dichiarazione variabili 
const ticketDisplay = document.getElementById('ticketPrice');



// Richiste all'utente 
const distance = parseInt( prompt('Quanti km vuoi percorrere?' , '50').trim());
const age = parseInt(prompt('Quanti anni hai?' , '30').trim());




// Validazione Input numerici utente 
if ( isNaN(distance) || isNaN(age) ){
    alert('Valori inseriti non validi, reinserire!');
} else if (distance < 0 || age < 0){
    alert('Non puoi inserire valori negativi, reinserire!');
}
else{



// calcolare prezzo senza sconto 
const plainPrice = (distance * 0.21).toFixed(2);
console.log(`Il prezzo intero è ${plainPrice}`);


let finalPrice = plainPrice;

// calcoli sconti 
if (age < 18 ){
    finalPrice = plainPrice - (plainPrice / 100 * 20);
} else if(age > 65){
    finalPrice = plainPrice - (plainPrice / 100 * 40);
} 

console.log(finalPrice);



// rendere presentabile il prezzo 
finalPrice = finalPrice.toFixed(2);
console.log(`Il prezzo scontato è ${finalPrice}`);



// Iniettare in pagina il risultato 
ticketDisplay.innerText = `Il prezzo scontato è ${finalPrice} euro`;

}