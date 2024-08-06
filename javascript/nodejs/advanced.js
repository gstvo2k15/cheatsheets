// Advanced JavaScript Concepts
// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
};

fetchData().then((data) => console.log(data));

// Async/Await
const fetchDataAsync = async () => {
  const data = await fetchData();
  console.log(data);
};

fetchDataAsync();
