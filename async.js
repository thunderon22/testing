// Function that returns a promise which resolves after a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function that simulates fetching data and returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John Doe", age: 30 };
            resolve(data);
        }, 2000); // Simulating a 2 second delay
    });
}

// Function using async/await to handle the promise returned by fetchData
async function getUserData() {
    console.log("Fetching data...");

    try {
        // Wait for the fetchData promise to resolve
        const data = await fetchData();
        console.log("Data fetched:", data);

        // Wait for an additional 1 second delay
        await delay(1000);
        console.log("Processing complete.");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the async function
getUserData();
