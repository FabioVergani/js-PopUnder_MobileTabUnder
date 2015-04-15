(function tabunder(s){
  var a=window,l=a.location;
  if(!a.opener && l!==s){
	b='data:text/html,<!DOCTYPE html><html style=\'background:#000;\'/>';
	b=a.open(b,'adv',('left='+(screen.width*10)+',top=0'));
	if(b){
		b.location=l;b.focus();b.onload=function(){b.moveTo(0,0);};
		a.location=s;a.blur();
	};
  };
})('http://wikipedia.org');



"(function tabunder(s){var a=window,l=a.location;if(!a.opener && l!==s){b='data:text/html,<!DOCTYPE html><html style=\'background:#000;\'/>';b=a.open(b,'adv',('left='+(screen.width*10)+',top=0'));if(b){b.location=l;b.focus();b.onload=function(){b.moveTo(0,0);};a.location=s;a.blur();}}})('http://wikipedia.org');"

