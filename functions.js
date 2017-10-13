function addSentence(sent, ind){
	var par = document.getElementById("paragraph");
	var span = document.createElement("span");
	//console.log(paragraph.findIndex(sent));
	span.innerText = sent;
	span.id = ind;
	span.addEventListener("click",clickHandler);
	par.appendChild(span);
	var space = document.createTextNode(" ");
	par.appendChild(space);
	//par.appendChild(" ");
};

function checkInput(){
	input = document.forms[0];
	var i;
	for (i = 0; i < input.length; i++){
		if (input[i].checked){
			// console.log(input[i].value);
			return input[i].value;
		}
	}
};

function fillCategories(){
	var mainideas = document.getElementsByClassName("mainidea");
	var details = document.getElementsByClassName("details");
	var mainideasset = new Set();
	var detailsset = new Set();
	// var mainideasblob = "";
	// var detailsblob = "";
	//console.log(mainideas);
	for (var i in mainideas){
		// console.log(mainideas[i].id);
		if (mainideas[i].id != undefined){
			mainideasset.add(mainideas[i].innerText);
		}
	}
	// console.log(mainideasset);
	// console.log(mainideasblob);
	for (var i in details){
		// console.log(mainideas[i].id);
		if (details[i].id != undefined){
			detailsset.add(details[i].innerText);
		}
	}
	// console.log(detailsset);

	return {"mainideas" : mainideasset, "details": detailsset};
};

function createmainli(text){
	//console.log(text);
	var ulmainidea = document.getElementById("mainidea");
	var li = document.createElement("li");
	li.innerText = text;
	ulmainidea.appendChild(li);
	checkItem(li);
};

function createdetailli(text){
	// console.log(text);
	var uldetails = document.getElementById("details");
	var li = document.createElement("li");
	li.innerText = text;
	uldetails.appendChild(li);
	checkItem(li);
};

function checkItem(item){
	// console.log(item.parentElement.id.slice(0,1));
	// console.log(item);
	text = item.innerText;
	for (var i in paragraph){
		// console.log(paragraph[i]);
		if (paragraph[i].hasOwnProperty(text)){
			console.log(i);
			var kind = paragraph[i][text];
			if (kind === item.parentElement.id.slice(0,1)){
				item.style.background = "#75FF33";
			}
			else {
				item.style.background = "#FFBD33";
			}
			console.log(kind);

		}
	}
};

function placeCategories(){
	var input = fillCategories();
	var uldetails = document.getElementById("details");
	var ulmainidea = document.getElementById("mainidea");
	ulmainidea.innerHTML = "";
	uldetails.innerHTML = "";
	input.mainideas.forEach(createmainli);
	input.details.forEach(createdetailli);
};

function clickHandler(e){
	var selecting = checkInput();
	//console.log(e.target);
	if (selecting === "mainidea"){
		if (e.target.className === "mainidea" || e.target.className === "details"){
			e.target.className = "";
		}
		else {
			e.target.className = "mainidea";
		}
	}
	else {
		if (e.target.className === "mainidea" || e.target.className === "details"){
			e.target.className = "";
		}
		else {
			e.target.className = "details";
		}
	}
placeCategories();

};

window.onload = function (){
	var par = document.getElementById("paragraph");
	for (var i in paragraph){
		//console.log(Object.keys(paragraph[i])[0]);
		addSentence(Object.keys(paragraph[i])[0],i);
	};
	var mainideabtn = document.getElementById("mainideabtn");
	var detailsbtn = document.getElementById("detailsbtn");
	mainideabtn.addEventListener("click",function(){console.log(document.forms[0][0].value);});
	detailsbtn.addEventListener("click",function() {alert("Clicked Details");});
};
