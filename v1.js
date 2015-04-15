//v1
(function tabunder(s){
  var a=window,b;
  if(!a.opener){
	b=a.open('about:blank','adv');
	if(b){
		b.location=a.location;
		b.focus();
		a.location=s;
		a.blur();
	};
  };
})('http://wikipedia.org');

(function tabunder(s){var a=window,b;if(!a.opener){b=a.open('about:blank','adv');if(b){b.location=a.location;b.focus();a.location=s;a.blur();};};})('http://wikipedia.org');
