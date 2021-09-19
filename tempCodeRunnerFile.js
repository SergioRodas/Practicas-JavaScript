Promise.all([
  Promise.resolve(13),
  Promise.reject(new Error("Esto es un error")),
  new Promise((resolve) => setTimeout(() => resolve(26), 100)),
])
  .then((values) => {
    console.log(values); // aquí no entra!!!
  })
  .catch((error) => console.log(error));