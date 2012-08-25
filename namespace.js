/**
 *  namespace-function. Creates a object structure without overwriting anything.
 * @param (string) namespaceString
 * @param (anything, function, object, variable...) obj
 * @returns {Boolean}
 */
function namespace(namespaceString, obj) {
    var parts = namespaceString.split('.'),
        scope = this,
        part;

    for(var i = 0, partsLength = parts.length, lastIndex = partsLength-1; i < partsLength; i++) {
        part = parts[i];
        scope[part] = i === lastIndex ? obj : scope[part] || {};
        scope = scope[part];
    }
}

// Short version without for body */
function namespace(namespaceString, obj) {
	for (var scope = this, 
			i = 0, 
			currentPart, 
			parts = namespaceString.split('.');
		currentPart = parts[i++];
		scope = scope[currentPart] = parts[i] ? scope[currentPart] || {} : obj);
}

//Short version without for body - minified
function namespace(a,b){for(var c=this,d=0,e,f=a.split(".");e=f[d++];c=c[e]=f[d]?c[e]||{}:b);}