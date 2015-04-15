//v2
(function tabunder(s){
  var a=window,b;
  if(!a.opener){
	b='data:text/html,<!DOCTYPE html><html style=\'background: #000;\'><head></head><body></body></html>';
	b=a.open(b,'adv',("left="+(screen.width*2)+",top=0"));
	if(b){
		b.location=a.location;
		b.focus();
		b.onload=function(){b.moveTo(0,0);};
		a.location=s;
		a.blur();
	};
  };
})('http://wikipedia.org');


="(function tabunder(s){var a=window,b;if(!a.opener){b='data:text/html,<!DOCTYPE html><html style=\'background: #000;\'><head></head><body></body></html>';b=a.open(b,'adv',('left='+(screen.width*2)+',top=0'));if(b){b.location=a.location;b.focus();b.onload=function(){b.moveTo(0,0);};a.location=s;a.blur();};};})('http://wikipedia.org');";
