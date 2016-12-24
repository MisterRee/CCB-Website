
document.onreadystatechange = function(){
	if (document.readyState === "complete"){
		callback();
	}
}

var callback = function(){
	addMobileMenuButtonToggle();
	resizePage();
	window.onresize = function(){
		resizePage();
	};
}

function resizePage(){
	var body = document.querySelector('body');
	var header = document.querySelector('header');
	var main = document.querySelector('main');
	var nav = document.querySelector('nav');
	var footer = document.querySelector('footer');

	// header resizing
	if( window.innerWidth < 720 ){
		var px = document.querySelector('header').offsetHeight + "px";
		document.querySelector('main').style.paddingTop = px;
		document.querySelector('nav').style.top = px;
	} else {
		document.querySelector('main').style.paddingTop = 0;
		document.querySelector('nav').style.top = 0;
	}

	// main body resizing
	if( body.clientHeight > header.clientHeight + main.clientHeight + footer.clientHeight){
		main.style.height = (body.clientHeight - header.clientHeight - footer.clientHeight) + 'px';
	} else {
		main.style.height = 'auto';
	}
}

function addMobileMenuButtonToggle(){
	var menuButton = document.querySelector('.header-menu-button');
	var nav = document.querySelector('nav');
	menuButton.addEventListener('click', function(event){
		if( nav.classList.contains('active') ){
			nav.classList.remove('active');
		} else {
			nav.classList.add('active');
		}
	});
}