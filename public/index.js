/*variable declarations here*/
var buttonClick = document.getElementsByClassName('button-click')[0];
var enableVideo = document.getElementsByTagName('iframe')[0];
var showMessage = document.getElementsByClassName('message')[0];
var enableImage = document.getElementsByTagName('img')[0];
var showCommentButton = document.getElementById('comment-button');
var showModal = document.getElementById('modal-backdrop');
var commentModal = document.getElementById('comment-modal');
var escapeModal = document.getElementsByClassName('modal-close-button')[0];
var cancelModal = document.getElementsByClassName('modal-cancel-button')[0];
var acceptModal = document.getElementsByClassName('modal-accept-button')[0];
var commentInput = document.getElementById('comment-type-input');
var authorInput = document.getElementById('author-type-input');
var commentHeader = document.getElementsByClassName('comment-header')[0];
var commentContainer = document.getElementsByClassName('comment-container')[0];
var commentStatus = document.getElementsByClassName('commenter');


/*2 addEventListeners, one for showing images and the other for showing videos*/
buttonClick.addEventListener("click", function(){
	commentHeader.classList.remove('hidden');
	for(var i = 0; i < commentStatus.length; i++)
		commentStatus[i].style.display = "block";

	buttonClick.style.display = "none";
	showMessage.style.visibility = "visible";
	showCommentButton.style.display = "block";
	enableImage.style.display = "block";
});

buttonClick.addEventListener("click", function(){
	commentHeader.classList.remove('hidden');
	for(var i = 0; i < commentStatus.length; i++)
		commentStatus[i].style.display = "block";

	buttonClick.style.display = "none";
	showMessage.style.visibility = "visible";
	showCommentButton.style.display = "block";
	enableVideo.style.display = "block";
});

/*Add event listener for clicking on + button*/
showCommentButton.addEventListener("click", function(){
	showModal.classList.remove('hidden');
	commentModal.classList.remove('hidden');
	commentInput.value = "";
	authorInput.value = "";
});

/*Add event listener for closing modal upon clicking in X*/
escapeModal.addEventListener("click", function(){
	showModal.classList.add('hidden');
	commentModal.classList.add('hidden');
});

/*Add event listener for closing modal upon clicking in CANCEL*/
cancelModal.addEventListener("click", function(){
	showModal.classList.add('hidden');
	commentModal.classList.add('hidden');
});


/*Adds comment upon clicking ACCEPT*/
acceptModal.addEventListener("click", function(){
	if(commentInput.value == ""){
		alert("Type something in the comment field");
	}
	else if(authorInput.value == ""){
		alert("Type something in the author field");
	}
	else{
		var section = document.createElement('section');
		section.classList.add("commenter");

		var div = document.createElement('div');
		div.classList.add("field");

		var p1 = document.createElement('p');
		p1.classList.add("comment-text");

		var p2 = document.createElement('p');
		p2.classList.add("author-text");

		var commentValue = document.createTextNode(commentInput.value);
		var authorValue = document.createTextNode(authorInput.value);
		p1.appendChild(commentValue);
		p2.appendChild(authorValue);

		div.appendChild(p1);
		div.appendChild(p2);
		section.appendChild(div);
		commentContainer.appendChild(section);

		showModal.classList.add('hidden');
		commentModal.classList.add('hidden');
	}
});






