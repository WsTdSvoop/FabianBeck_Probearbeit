/**==========================================================================
    Get information from https://blockchain.info/ticker
   ==========================================================================**/

// get information from https://blockchain.info/ticker als JSON OBJ
let urlInfo = "https://blockchain.info/ticker";
let getInfo = new XMLHttpRequest();
getInfo.open('GET', urlInfo);
getInfo.responseType = 'text';

getInfo.onload = function() {
	// "datainfo" enthält das komplette object.
	// "datainfo.EUR" enthält das unterobject für die Europreise
	// "datainfo.EUR.buy" enthält den wert buy des objects EUR.
	var datainfo = JSON.parse(getInfo.response);
	for( let bitcoininfo in datainfo ) {
		if(bitcoininfo == "EUR") {
			value = datainfo[bitcoininfo];
			for(let i in value) {
				if(i == "sell") {
					sellEUR.textContent = "Verkaufspreis: " + value[i] + " €";
        		}
        		if(i == "buy") {
          			buyEUR.textContent = "Einkaufspreis: " + value[i] + " €";
        		}
      		}
    	}
		// "datainfo" enthält das komplette object.
		// "datainfo.USD" enthält das unterobject für die USDpreise
		// "datainfo.USD.buy" enthält den wert buy des objects USD.
		if(bitcoininfo == "USD") {
			value = datainfo[bitcoininfo];
			for(let i in value) {
				if(i == "sell") {
					sellUSD.textContent = "Verkaufspreis: " + value[i] + " $";
        		}
        		if(i == "buy") {
          			buyUSD.textContent = "Einkaufspreis: " + value[i] + " $";
        		}
      		}
    	}
		if(bitcoininfo == "AUD") {
			value = datainfo[bitcoininfo];
			for(let i in value) {
				if(i == "sell") {
					sellAUD.textContent = "Verkaufspreis: " + value[i] + " A$";
        		}
        		if(i == "buy") {
          			buyAUD.textContent = "Einkaufspreis: " + value[i] + " A$";
        		}
      		}
    	}
		if(bitcoininfo == "NZD") {
			value = datainfo[bitcoininfo];
			for(let i in value) {
				if(i == "sell") {
					sellNZD.textContent = "Verkaufspreis: " + value[i] + " NZ$";
        		}
        		if(i == "buy") {
          			buyNZD.textContent = "Einkaufspreis: " + value[i] + " NZ$";
        		}
      		}
    	}
		if(bitcoininfo == "GBP") {
			value = datainfo[bitcoininfo];
			for(let i in value) {
				if(i == "sell") {
					sellGBP.textContent = "Verkaufspreis: " + value[i] + " £";
        		}
        		if(i == "buy") {
          			buyGBP.textContent = "Einkaufspreis: " + value[i] + " £";
        		}
      		}
    	}
	}
};
getInfo.send();
