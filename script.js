var box = document.getElementById('box');
var clickCounts = document.getElementById('click-count');
var count = 0;

box.addEventListener('click', function(){
	count++;
	
	clickCounts.innerText = count;
});