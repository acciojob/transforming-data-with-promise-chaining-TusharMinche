//your JS code here. If required.

let btn =  document.getElementById("btn");
let output = document.getElementById("output");

btn.addEventListener("click", () => {
	let mypromise = new Promise((res, rej) => {
		setTimeout(() => {
			// alert("Hi");
			let input = document.getElementById("ip").value;
			
			res(input);
		}, 2000);
	})
		
	mypromise.then((data) => {
		output.innerHTML = `Result: ${data}`;
		return new Promise((res, rej) => {
			setTimeout(() => {
				res(data*2);
			}, 2000)
		})
	}).then((data) => {
		output.innerHTML = `Result: ${data}`;
		return new Promise((res, rej) => {
			setTimeout(() => {
				res(data-3);
			}, 1000)
		})
	}).then((data) => {
		output.innerHTML = `Result: ${data}`;
		return new Promise((res, rej) => {
			setTimeout(() => {
				res(data/2);
			}, 1000)
		})
	}).then((data) => {
		output.innerHTML = `Result: ${data}`;
		return new Promise((res, rej) => {
			setTimeout(() => {
				res(data+10);
			}, 1000)
		})
	}).then((data) => {
		output.innerHTML = `Result: ${data}`;
	})
})