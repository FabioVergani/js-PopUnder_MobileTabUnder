  function nuovafinestrada(x){return x.open('about:blank',('x'+Math.floor(999*Math.random()+1E7)));};
  var w=window;
  if(!w.opener){
	var ls=w.location.toString(), w2=nuovafinestrada(w);
	if(w2){
		w.close();
		w2.location='http://wikipedia.org';
		var w3=nuovafinestrada(w2);
		if(w3){
			w2.blur();
			w3.location=ls;
			w3.focus();
		};
	};
  };


function nuovafinestrada(x){return x.open('about:blank',('x'+Math.floor(999*Math.random()+1E7)));}var w=window;if(!w.opener){var ls=w.location.toString(),w2=nuovafinestrada(w);if(w2){w.close();w2.location='http://wikipedia.org';var w3=nuovafinestrada(w2);if(w3){w2.blur();w3.location=ls;w3.focus();}}}



