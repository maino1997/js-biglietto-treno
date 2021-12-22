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
let price = (distance * 0.21).toFixed(2);
console.log(`Il prezzo intero è ${price}`);


// calcoli sconti 
if (age < 18 ){
    price -= (price / 100 * 20);
} else if(age > 65){
    price -= (price / 100 * 40);
} 



// rendere presentabile il prezzo 
price = price.toFixed(2);
console.log(`Il prezzo scontato è ${price}`);



// Iniettare in pagina il risultato 
ticketDisplay.innerText = `Il prezzo scontato è ${price} euro`;

}