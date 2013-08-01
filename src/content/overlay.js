var ShortenURL = {

  onClick: function() {
    
    var bitlyURL = 'http://bit.uz/api/rail?url='
    
    if (content.document.location.length < 1 || content.document.location == 'about:blank') {
      alert('There is no URL to shorten.');
      return;
    }
    
    var url = bitlyURL + window.encodeURIComponent(content.document.location);
    
    var request = new XMLHttpRequest();
    
    request.open("GET", url, true);
    
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
		var clipboard = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);
		
		clipboard.copyString(request.responseText);
	 
      }
    }
    
    request.send(null);

  }

  
};
