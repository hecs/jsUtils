/**
 * Creates a object structure without overwriting anything.
 * @param (string) namespaceString
 * @param (anything, function, object, variable...) obj
 * @returns {Boolean}
 */
function namespace(namespaceString, obj) {
    var parts = namespaceString.split('.'),
        scope = window,
        currentPart = '';

    for(var i = 0, partsLength = parts.length, lastIndex = partsLength-1; i < partsLength; i++) {
        currentPart = parts[i];
        scope[currentPart] = i === lastIndex ? obj : scope[currentPart] || {};
        scope = scope[currentPart];
    }
}