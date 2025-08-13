let btn = document.getElementById("btn");
let output = document.getElementById("output");

btn.addEventListener("click", () => {
    let mypromise = new Promise((res) => {
        setTimeout(() => {
            let input = document.getElementById("ip").value;
            res(Number(input));
        }, 2000); // First step: 2 seconds
    });

    mypromise
        .then((data) => {
            output.innerHTML = `Result: ${data}`;
            return new Promise((res) => {
                setTimeout(() => {
                    res(data * 2);
                }, 1000); // Cypress expects 1 sec here
            });
        })
        .then((data) => {
            output.innerHTML = `Result: ${data}`;
            return new Promise((res) => {
                setTimeout(() => {
                    res(data - 3);
                }, 1000);
            });
        })
        .then((data) => {
            output.innerHTML = `Result: ${data}`;
            return new Promise((res) => {
                setTimeout(() => {
                    res(data / 2);
                }, 1000);
            });
        })
        .then((data) => {
            output.innerHTML = `Result: ${data}`;
            return new Promise((res) => {
                setTimeout(() => {
                    res(data + 10);
                }, 1000);
            });
        })
        .then((data) => {
            output.innerHTML = `Final Result: ${data}`; // Match test expectation
        });
});
