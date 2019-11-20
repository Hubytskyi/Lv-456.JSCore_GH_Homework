function showProps(obj) {
	var props = [];
	if (Object.keys) return Object.keys(obj);
}      

console.log(showProps({Alex: 1982, John: 1994, Sam: 1977, Frank: 1990, Andrew: 1988}));