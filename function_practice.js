var myName = prompt("What is your name?");
var nativeLang = prompt("What is your native language");
var welcomeSaying= prompt("How do you greet others?");


function greeting(name, language, saying) {
	console.log(saying + " " + name + ", nice to speak with someone who knows " + language);

}

greeting(myName, nativeLang, welcomeSaying);
