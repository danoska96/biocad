"use strict";

let input1 = document.querySelector("#input1");
let submit1 = document.querySelector("#submit1");
let input2 = document.querySelector("#input2");
let submit2 = document.querySelector("#submit2");
let radio = document.querySelectorAll("input[type='radio']");
let form2 = document.querySelector("#form2");
let info = document.querySelector(".unit-name__info");
let button = document.querySelector("input[type='button']");

input1.onkeyup = function () {
	if (input1.value!=0){
		submit1.disabled = false;
		submit1.style.backgroundColor = '#353535';
	} else {
		submit1.disabled = true;
		submit1.style.backgroundColor = '#5d5d5d';
	}
}

form2.onchange = function(){
	let check = false;
	for (let key of radio){
		if (key.checked){
			check = true;
		}
	}
	if(input2.value.length!=0 && check){
		submit2.disabled = false;
		submit2.style.backgroundColor = '#4990E2';
	} else{
		submit2.disabled = true;
		submit2.style.backgroundColor = '#6da6e8';
	}
}

info.parentElement.onmouseenter = function(){
	info.style.display="block";
}

info.parentElement.onmouseleave = function(){
	info.style.display="none";
}

submit2.onclick = function() {
	if (!submit2.disabled){
		button.style.display = "block";
	}
}