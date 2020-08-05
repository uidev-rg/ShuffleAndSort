// Grid creation
var gridContainer = document.querySelector('.grid-container');
var colors = {1: '#6F98A8', 2: '#2B8EAD',3: '#333333', 4: '#2B8EAD',5: '#333333', 6: '#BFBFBF',7: '#BFBFBF', 8: '#6F98A8', 9: '#333333'};
	
for (var i = 1; i <= 9; i++) {
	var card = document.createElement('div');
	var cardTxt= document.createElement('div');
	var cardBg= document.createElement('div');
	card.classList.add('card');
	cardTxt.classList.add('card-txt');
	cardBg.classList.add('card-bg');
	cardTxt.innerHTML = i;
	gridContainer.appendChild(card);
	card.appendChild(cardTxt);
	card.appendChild(cardBg);
	cardBg.style.backgroundColor = colors[i];
}
	
// Shuffle Method
	
document.querySelector('.btn-shuffle').addEventListener('click', function(event){
	var cardNumbers = [];
	var cardElement = document.querySelectorAll('.card');
	var swap;
	var temp;
	
	cardElement.forEach(function(index) {
		cardNumbers.push(index.firstChild.innerHTML);
	});
	
	console.log(cardNumbers);
	
	for (var i = cardNumbers.length - 1; i > 0; i--) {
		swap = Math.floor(Math.random() * (i + 1));
		temp = cardNumbers[i];
		cardNumbers[i] = cardNumbers[swap];
		cardNumbers[swap] = temp;
	}
	  
	i = 0;
	cardElement.forEach(function(index) {
		index.firstChild.innerHTML = cardNumbers[i];
		index.lastChild.style.backgroundColor = colors[index.firstChild.innerHTML];
		i++;
	});
});
	
// Sort Method
	
document.querySelector('.btn-sort').addEventListener('click', function(event){
	var cardNumbers = [];
	var cardElement = document.querySelectorAll('.card');
	
	cardElement.forEach(function(index) {
		cardNumbers.push(+index.firstChild.innerHTML);
	});
	
	console.log(cardNumbers);
	
	cardNumbers.sort();
	
	i = 0;
	cardElement.forEach(function(index) {
		index.firstChild.innerHTML = cardNumbers[i];
		index.lastChild.style.backgroundColor = colors[index.firstChild.innerHTML];
		i++;
	});
	
});