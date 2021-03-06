/* 
Traccia Milestone 1.
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

Consigli:
- Mangiate e poi iniziate a lavorare subito.
- riprodurre layout fedelmente
- fate una milestone alla volta
- mettete ciascuna milestone in una cartella (es. js-es6-icons/milestone_1)
- completata una milestone passate alla successiva, copiando il contenuto della milestone precedente nella cartella di quella nuova.
- per ciascuna milestone scrivete quello che volete fare, passo passo, in italiano.
- leggete le slide e la documentazione degli strumenti che volete utulizzare
- Divertitievi.
*/

// Array di oggetti
const icons = [
	{
		name: "cat",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "crow",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "dog",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "dove",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "dragon",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "horse",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "hippo",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "fish",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "carrot",
		prefix: "fa-",
		type: "vegetable",
		family: "fas",
	},
	{
		name: "apple-alt",
		prefix: "fa-",
		type: "vegetable",
		family: "fas",
	},
	{
		name: "lemon",
		prefix: "fa-",
		type: "vegetable",
		family: "fas",
	},
	{
		name: "pepper-hot",
		prefix: "fa-",
		type: "vegetable",
		family: "fas",
	},
	{
		name: "user-astronaut",
		prefix: "fa-",
		type: "user",
		family: "fas",
	},
	{
		name: "user-graduate",
		prefix: "fa-",
		type: "user",
		family: "fas",
	},
	{
		name: "user-ninja",
		prefix: "fa-",
		type: "user",
		family: "fas",
	},
	{
		name: "user-secret",
		prefix: "fa-",
		type: "user",
		family: "fas",
	},
];

// ciclo forEach
icons.forEach((element, index, array) => {
	let icon = `
			<div class="col
					d-flex
					flex-column
					justify-content-center
					align-items-center
					bg-light
					rounded-3
					text-center
		
					shadow
					small">
				<i class="${element.family} ${element.prefix}${element.name}"></i>
				<h6 class="text-uppercase fs-6 mt-1">${element.name}</h6>
			</div> 
	`;
	console.log(icon);
	let result = document.querySelector(".row");
	result.innerHTML += icon;
});

