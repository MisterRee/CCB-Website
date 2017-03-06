(function($){
	document.onreadystatechange = function(){
		if (document.readyState === "complete"){
			callback();
		}
	}

	var callback = function(){
		addMobileMenuButtonToggle();
		resizePage();
		//scrollPage();
		
		window.onresize = function(){
			resizePage();
		};
		window.onscroll = function(){
			//scrollPage();
		};
	}
	
	var resizePage = function(){
		var headerLinks = $('nav li');
		var body = document.querySelector('body');
		var header = document.querySelector('header');
		var main = document.querySelector('main');
		var nav = document.querySelector('nav');
		var footer = document.querySelector('footer');
		
		//widthEqualizer(headerLinks, {});
		
		// main body resizing
		if( body.clientHeight > header.clientHeight + main.clientHeight + footer.clientHeight){
			main.style.height = (body.clientHeight - header.clientHeight - footer.clientHeight) + 'px';
		} else {
			main.style.height = 'auto';
		}
	}
	
	// Get array of values from jquery object
	// Finds the element with greatest width and then sets all other elements to that value
	// This function with a query parameter uses offsetwidth. The queries are supposed to take in css values that may influence the calculation.
	function widthEqualizer(jqueryObj, queries){
		// Clear all inline-styles from previous calculations to not influnece new calculation
		jqueryObj.removeAttr('style');
		
		var maxwidthRecord;
		var varienceChange = false;
		for(var i = 0; i < jqueryObj.length; i++){
			if(i == 0){
				maxwidthRecord = jqueryObj[i].clientWidth;
			} else {
				if(maxwidthRecord != jqueryObj[i].clientWidth){
					varienceChange = true;
					if(maxwidthRecord < jqueryObj[i].clientWidth){
						maxwidthRecord = jqueryObj[i].clientWidth;
					}
				}
			}
		}
		
		if(varienceChange){
			queries['width'] = maxwidthRecord + "px";
			setInlineRules(jqueryObj, queries);
		} else {
			setInlineRules(jqueryObj, queries);
		}
	}
	
	function addMobileMenuButtonToggle(){
		var nav = document.querySelector('nav');
		var menuButton = document.querySelector('.header-menu-button');
		menuButton.addEventListener('click', function(event){
			if( nav.classList.contains('active') ){
				nav.classList.remove('active');
			} else {
				nav.classList.add('active');
			}
		});
	}
	
	// Applies the css rules to every instance of the jquery object.
	function setInlineRules(jObj, q){
		jObj.each(function(i, obj){
			$(this).css(q);
		});
	}
	
}(jQuery));

/*
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
		var px = header.offsetwidth + "px";
		main.style.marginTop = px;
		nav.style.top = px;
	} else {
		main.style.marginTop = 0;
		nav.style.top = 0;
	}

	// main body resizing
	if( body.clientwidth > header.clientwidth + main.clientwidth + footer.clientwidth){
		main.style.width = (body.clientwidth - header.clientwidth - footer.clientwidth) + 'px';
	} else {
		main.style.width = 'auto';
	}
	
	scrollPage(body,header,main,nav,footer);
}

function scrollPage(){
	var body = document.querySelector('body');
	var header = document.querySelector('header');
	var nav = document.querySelector('nav');
	
	if( window.innerWidth >= 720 ){
		if( header.clientwidth  - body.scrollTop >= 0){
			nav.style.top = (header.clientwidth  - body.scrollTop) + 'px';
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
*/