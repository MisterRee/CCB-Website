
document.onreadystatechange = function(){
	if (document.readyState === "complete"){
		callback();
	}
}

var callback = function(){
	var body = document.querySelector('body');
	var nav = document.querySelector('nav');

	addMobileMenuButtonToggle(nav);
	resizePage();
	scrollPage();
	
	window.onresize = function(){
		resizePage();
	};
	window.onscroll = function(){
		scrollPage();
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
		var px = header.offsetHeight + "px";
		main.style.marginTop = px;
		nav.style.top = px;
	} else {
		main.style.marginTop = 0;
		nav.style.top = 0;
	}

	// main body resizing
	if( body.clientHeight > header.clientHeight + main.clientHeight + footer.clientHeight){
		main.style.height = (body.clientHeight - header.clientHeight - footer.clientHeight) + 'px';
	} else {
		main.style.height = 'auto';
	}
	
	scrollPage(body,header,main,nav,footer);
}

function scrollPage(){
	var body = document.querySelector('body');
	var header = document.querySelector('header');
	var nav = document.querySelector('nav');
	
	if( window.innerWidth >= 720 ){
		if( header.clientHeight  - body.scrollTop >= 0){
			nav.style.top = (header.clientHeight  - body.scrollTop) + 'px';
		} else{
			nav.style.top = 0;
		}
	} else {
		nav.style.top = 'inherit';
	}
}

function addMobileMenuButtonToggle(nav){
	var menuButton = document.querySelector('.header-menu-button');
	menuButton.addEventListener('click', function(event){
		if( nav.classList.contains('active') ){
			nav.classList.remove('active');
		} else {
			nav.classList.add('active');
		}
	});
}