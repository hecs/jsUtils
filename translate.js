// A neat way of getting stuff from an object with a key. example: getText("startpage.header.welcome").

var texts = {
    startpage: {
		header: {
			welcome: "Všlkommen"
		}
    }
}

function getText(key){
    return new Function(["obj"], "return obj." + key)(texts, key);
}