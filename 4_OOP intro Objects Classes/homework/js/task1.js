let mentor = { 
	course: "JS fundamental", 
	duration: 3,
	direction: "web-development" 
};

function getPropsCount(currentObject) {
	return Object.keys(mentor).length;
};

console.log(getPropsCount());