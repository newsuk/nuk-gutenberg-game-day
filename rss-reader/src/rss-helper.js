import _ from 'lodash';

const maxItems = 100;
const topCount = 10;

const mergeCounts = (obj1, obj2) => Object.keys(obj2).reduce((acc, key) => {
	if (!acc[key]) {
		acc[key] = 0;
	}
	acc[key] = obj1[key] + obj2[key];
	return acc;
}, obj1);

const itemReducer = (acc, cat) =>
	({ ...acc, [cat]: (acc[cat] || 0) + 1 });


const feedReducer = (acc, item) => {
	if(!item || !item.category || !Array.isArray(item.category)){
		return acc;
	}
	return mergeCounts(acc, item.category.reduce(itemReducer, {}));
}

const objectToPairs = obj => Object.keys(obj).map(key => ([key, obj[key]]));

const sortPairs = (a, b) => {
	if(a[1] < b[1]){
		return 1;
	}
	if(a[1] > b[1]){
		return -1;
	}
	return 0;
}

export const countCategories = _.flow(
	feed => feed.item.slice(0, maxItems),
	items => items.reduce(feedReducer, {}),
	objectToPairs,
	pairs => pairs.sort(sortPairs),
	sortedPairs => sortedPairs.slice(0, topCount)
);
