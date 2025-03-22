const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let element = document.querySelectorAll(".price")
	let arr = [];

	element.forEach(el => arr.push(Number(el.textContent)));

	let sum =0;
	arr.forEach(el => sum += el);

	let sumRow = document.createElement("tr");
	let sumCell = document.createElement("td");
	sumCell.textContent = sum;
	sumRow.appendChild(sumCell);

	document.querySelector("table").appendChild(sumRow);
  
};

getSumBtn.addEventListener("click", getSum);

