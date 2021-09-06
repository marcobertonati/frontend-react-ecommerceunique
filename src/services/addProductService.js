module.exports = {
  async addProduct(data) {
    console.log("Ingresó a ../services => addProduct");

    const dataBody = data;
    console.log("Esto ingresa en dataBody");
    console.log(dataBody);

    try {

      const response = await fetch("http://localhost:8080/api/product/create", {
        method: "POST",
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(dataBody),
      })
      .then(res=>console.log(res))
      .catch(err=>console.log(err));

      const results = response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  },
};
