const DATA = [
	[8.1, 7.9],
	[7.8, 8],
	[8, 7.8],
	[7.8, 7.7],
	[8.1, 7.8],
	[7.9, 7.6],
	[8.1, 7.1],
	[7.6, 7.2],
	[8.2, 7],
	[8.1, 7],
	[8.4, 7.5],
	[8.1, 6.8],
	[7.9, 6.9],
	[8, 6.7],
	[8.2, 6.5],
	[8, 6.7],
	[8.1, 6.6],
	[8, 6.6],
	[8.1, 6.9],
	[7.7, 6.5],
	[8.3, 6.9],
	[8.5, 6.9],
	[8.3, 6.6],
	[8.6, 5.9],
	[8.5, 6.1],
	[8.6, 5.7],
	[8.3, 5.9],
	[7.8, 6],
];

const TEMPLATE = document.querySelector("template");
const MAIN = document.querySelector("body > main");

for (const data of DATA) {
	const d = document.createRange().createContextualFragment(TEMPLATE.innerHTML);
	const difference = Math.max(data[0] - data[1], 0);
	d.querySelector("section > header > div").style.height = `${(data[1] - 4) * (data[1] - 4) * (data[1] - 4)}%`;
	d.querySelector("section > footer > div").style.height = `${(difference * difference + 3) * 10}%`;
	console.log(difference);
	MAIN.appendChild(d);
}
