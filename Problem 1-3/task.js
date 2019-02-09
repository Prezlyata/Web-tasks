const API_URL = 'https://demo7541705.mockable.io/inspirito';

const getLabelById = (data, id) => {
	if(data.id == id) {
		console.log(`finding by id: ${id}`)
		return `result: label ${data.label}`;
	} else if (data.childs != null){
		var i;
		var searchNode = null;
		for(i = 0; searchNode == null && i < data.childs.length; i++) {
			searchNode = getLabelById(data.childs[i], id);
		}
		return searchNode;
	}
	return null;
};

const fetchData = url => {
	fetch(url)
		.then(response => response.json())
		.then(data => {
		console.log(data);
		console.log(getLabelById(data, 2));
	});
};

fetchData(API_URL);