const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let ansRow = document.querySelector("#ans");

const getSum = () => {
//Add your code here
	let element = document.querySelectorAll(".price")
	let arr = [];

	element.forEach(el => arr.push(Number(el.textContent)));

	let sum =0;
	arr.forEach(el => sum += el);

	
	let sumCell = document.createElement("td");
	sumCell.textContent = sum;
	ansRow.appendChild(sumCell);
	
  
};

getSumBtn.addEventListener("click", getSum);

